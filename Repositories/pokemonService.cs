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

        public PokemonService(IMongoClient mongoClient, IPokeapiService pokeapiService)
        {
            var db = mongoClient.GetDatabase("pokemonData");
            this._pokemonCollection = db.GetCollection<HalfPokemonEntity>("pokemon");
        }

        public async Task<List<HalfPokemonDTO>> GetAllHalfPkmn()
        {
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

            Console.WriteLine("Could not find cashed pkmn!");
            return null;
        }
  
        public HalfPokemonDTO? GetHalfPkmnById(int id)
        {
            HalfPokemonDTO pkmn = _pokemonCollection.Find(x=>x.Id == id).First().MapHalfPkmn();

            if (pkmn != null)
            {
                Console.WriteLine($"Found cashed Pkmn!\n ID:{pkmn.Id} name: {pkmn.Name}");
                return pkmn;
            }

            Console.WriteLine("Could not find cashed pkmn");
            return null;
        }

    }   
    public interface IPokemonService
    {
       public Task<List<HalfPokemonDTO>> GetAllHalfPkmn();
       public HalfPokemonDTO? GetHalfPkmnByName(string name);
       public HalfPokemonDTO? GetHalfPkmnById(int id);
    }
}