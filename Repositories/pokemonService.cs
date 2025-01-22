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
        private readonly IPokeapiService PokeapiService;

        public PokemonService(IMongoClient mongoClient, IPokeapiService pokeapiService)
        {
            var db = mongoClient.GetDatabase("pokemonData");
            _pokemonCollection = db.GetCollection<HalfPokemonEntity>("pokemon");
            PokeapiService = pokeapiService;
        }

        public async Task<List<HalfPokemonDTO>> GetAllHalfPkmn(PkmnSummary summary)
        {
            var _db = await _pokemonCollection.AsQueryable().ToListAsync();

            List<HalfPokemonDTO> pokemons = [];
            if (_db.Count == 0) {
                
                summary.Results.ForEach(async summary => {
                    var pkmn = await PokeapiService.GetPokemon(summary.Name ?? "");

                    _pokemonCollection.InsertOne(pkmn);
                    pokemons.Add(pkmn.MapHalfPkmn());

                } );

                return pokemons;

            } else {
                return [.. _db.Select(x=> x.MapHalfPkmn())];
            }        
        }
        public async Task<HalfPokemonDTO> GetHalfPkmnByName(string name)
        {
            HalfPokemonDTO pokemon = _pokemonCollection.Find(x=> x.Name == name).First().MapHalfPkmn();
            if (pokemon == null) {
                HalfPokemonEntity pkmn = await PokeapiService.GetPokemon(name);
                
                if (pkmn != null) {
                    Console.WriteLine($"Found Pkmn!\n ID:{pkmn.Id} name: {pkmn.Name}");
                    _pokemonCollection.InsertOne(pkmn);
                    return pkmn.MapHalfPkmn();
                }
                Console.WriteLine("Could not find the pkmn!");
            }
            Console.WriteLine("Found cashed Pkmn!\n ID:{pkmn.Id} name: {pkmn.Name}");
            return pokemon;
        }
        public async Task<HalfPokemonDTO> GetHalfPkmnById(int id)
        {
            HalfPokemonDTO pkmn = _pokemonCollection.Find(x => x.Id == id).First().MapHalfPkmn();

            if (pkmn == null) {
                HalfPokemonEntity pokemon = await PokeapiService.GetPokemon(id);

                if (pokemon != null) {
                    _pokemonCollection.InsertOne(pokemon);
                    return pokemon.MapHalfPkmn();
                }
                Console.WriteLine("Could not find pkmn by provided ID");
            }
            return pkmn;
        }
        
        // im not sure if i should make this could i cant just filter and paginate it on the front end.
        // public List<HalfPokemonDTO> GetHalfPkmnByArr(List<string> nameArr)
        // {

        //     return (List<HalfPokemonDTO>)[];
        // }    
    }   
    public interface IPokemonService
    {
       public Task<List<HalfPokemonDTO>> GetAllHalfPkmn(PkmnSummary summary);
       public Task<HalfPokemonDTO> GetHalfPkmnByName(string name);
       public Task<HalfPokemonDTO> GetHalfPkmnById(int id);
    }
}