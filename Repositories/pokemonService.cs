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

            var db = await _pokemonCollection.AsQueryable().ToListAsync();
  
            return [.. db.Select(x=> x.MapHalfPkmn())];
        }
        public async Task<HalfPokemonDTO> GetHalfPkmnByName(string name)
        {
            HalfPokemonDTO pokemon = _pokemonCollection.Find(x=> x.Name == name).First().MapHalfPkmn();
            if (pokemon == null) {
                HalfPokemonEntity pkmn = await _PokeapiService.GetPokemon(name);
                
                if (pkmn != null) {
                    Console.WriteLine($"Found Pkmn!\n ID:{pkmn.Id} name: {pkmn.Name}");
                    _pokemonCollection.InsertOne(pkmn);
                    return pkmn.MapHalfPkmn();
                }
                Console.WriteLine("Could not find the pkmn!");
            } else {
                Console.WriteLine("Found cashed Pkmn!\n ID:{pkmn.Id} name: {pkmn.Name}");
                return pokemon;
            }

            Console.WriteLine("Could not find pkmn!");
            return new HalfPokemonDTO(){
                Name = ""
            };
        }
        
        // im not sure if i should make this could i cant just filter and paginate it on the front end.
        // public List<HalfPokemonDTO> GetHalfPkmnByArr(List<string> nameArr)
        // {

        //     return (List<HalfPokemonDTO>)[];
        // }    
    }   
    public interface IPokemonService
    {
       public Task<List<HalfPokemonDTO>> GetAllHalfPkmn(List<LinkDTO> summary);
       public Task<HalfPokemonDTO> GetHalfPkmnByName(string name);
    }
}