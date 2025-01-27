using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MongoDB.Driver;

using professorsTeamBuilder.models;
using professorsTeamBuilder.models.Entities;


namespace professorsTeamBuilder.Repositories
{
    public class StartupService : IStartupFilter
    {
        private readonly IMongoCollection<HalfPokemonEntity> _pokemonCollection;
        private readonly IPokeapiService _PokeapiService;

        public StartupService(IMongoClient mongoClient, IPokeapiService pokeapiService) 
        {
            var db = mongoClient.GetDatabase("pokemonData");
            this._pokemonCollection = db.GetCollection<HalfPokemonEntity>("pokemon");
            this._PokeapiService = pokeapiService;
        }

        public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> next)
        {
            return app =>
            {
                Task.Run(async () =>
                {
                    var pokemonTable = _pokemonCollection.AsQueryable().ToList();
        
                    if (pokemonTable.Count == 0) 
                    {
                        // Get the summary
                        PkmnSummary sum = await this._PokeapiService.GetSumamry();
        
                        int x = 0;
        
                        // For each pkmn summary call the url and cash the pokemon
        
                        foreach(var summary in sum.Results)
                        {
                            HalfPokemonEntity pkmn = new(){Name=""};
        
                            try {
                                pkmn = await _PokeapiService.GetPokemon(summary.Url);
                                x++;
                            }  
                            catch (TimeoutException err)
                            {
                                Console.WriteLine(err);
                                throw;
                            }
                            catch (System.Exception err)
                            {
                                Console.WriteLine(err);
                                throw;
                            }
        
                            try {
                                await _pokemonCollection.InsertOneAsync(pkmn);
        
                                if (x == sum.Results.Count)
                                {
                                    Console.WriteLine("done");
                                    break;
                                }
                            }
                            catch (TimeoutException err)
                            {
                                Console.WriteLine(err);
                                throw;
                            }
                            catch (Exception err)
                            {
                                Console.WriteLine(err);
                                throw;
                            }
                        }
                    }
        
                    next(app);
                }).Wait();
            };
        }

    }
}