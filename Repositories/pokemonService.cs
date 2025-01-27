using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using professorsTeamBuilder.models;
using professorsTeamBuilder.models.DTO;
using professorsTeamBuilder.models.Entities;
using professorsTeamBuilder.Tools;

namespace professorsTeamBuilder.Repositories
{
    public class PokemonService : IPokemonService
    {
        private readonly IMongoCollection<HalfPokemonEntity> _pokemonCollection;
        private readonly IPokeapiService _PokeapiService;

        public PokemonService(IMongoClient mongoClient, IPokeapiService pokeapiService)
        {
            var db = mongoClient.GetDatabase("pokemonData");
            this._pokemonCollection = db.GetCollection<HalfPokemonEntity>("pokemon");
            this._PokeapiService = pokeapiService;
        }

        public async Task<List<HalfPokemonDTO>> GetAllHalfPkmn(List<LinkDTO> summary)
        {
            Console.WriteLine("started");

            var pokemonList = new List<HalfPokemonDTO>();
            var batchSize = 100;
            var totalPokemon = await _pokemonCollection.CountDocumentsAsync(FilterDefinition<HalfPokemonEntity>.Empty);
            var totalBatches = (int)Math.Ceiling((double)totalPokemon / batchSize);

            for (int i = 0; i < totalBatches; i++)
            {
            var batch = await _pokemonCollection.Find(FilterDefinition<HalfPokemonEntity>.Empty)
                                 .Skip(i * batchSize)
                                 .Limit(batchSize)
                                 .ToListAsync();

            pokemonList.AddRange(batch.Select(x => x.MapHalfPkmn()));
            }

            return pokemonList;
        }

        public HalfPokemonDTO? GetHalfPkmnByName(string name)
        {
            HalfPokemonDTO pokemon = _pokemonCollection.Find(x=> x.Name == name).First().MapHalfPkmn();
            if (pokemon != null) {
                Console.WriteLine("Found cashed Pkmn!\n ID:{pkmn.Id} name: {pkmn.Name}");
                return pokemon;   
            }

            Console.WriteLine("Could not find pkmn!");
            return null;
        }
  
    }   
    public interface IPokemonService
    {
       public Task<List<HalfPokemonDTO>> GetAllHalfPkmn(List<LinkDTO> summary);
       public HalfPokemonDTO? GetHalfPkmnByName(string name);
    }
}