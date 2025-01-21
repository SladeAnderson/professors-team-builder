using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using professorsTeamBuilder.models.DTO;

namespace professorsTeamBuilder.Repositories
{
    public class PokemonService
    {
        private readonly IMongoCollection<HalfPokemonDTO> _pokemonCollection;

        public PokemonService(IMongoClient mongoClient)
        {
            var db = mongoClient.GetDatabase("pokemonData");
            _pokemonCollection = db.GetCollection<HalfPokemonDTO>("pokemon");
        }


        public List<HalfPokemonDTO> GetAllHalfPkmn()
        {
            if (_pokemonCollection.AsQueryable().Count() == 0) {
                // call pokeapi cash and return the called pokemon
                return (List<HalfPokemonDTO>)[];

            } else {
                return _pokemonCollection.AsQueryable().ToList();
            }
        

        
        }
        public HalfPokemonDTO GetHalfPkmnByName(string name)
        {
            return new HalfPokemonDTO(){
                Name = name,
            };
        }
        public HalfPokemonDTO GetHalfPkmnById(int id)
        {
            return new HalfPokemonDTO(){
                Name ="teasd"
            };
        }
        public List<HalfPokemonDTO> GetHalfPkmnByArr(List<string> nameArr)
        {
            return (List<HalfPokemonDTO>)[];
        }
        public List<HalfPokemonDTO> GetHalfPkmnByAmnt(int amount)
        {
            return (List<HalfPokemonDTO>)[];
        }




    }
}