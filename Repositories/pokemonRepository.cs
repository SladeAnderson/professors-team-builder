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

        public void GetAllHalfPkmn()
        {

        }
        public void GetHalfPkmnByName(string name)
        {

        }
        public void GetHalfPkmnById(int id)
        {

        }
        public void GetHalfPkmnByArr(List<string> nameArr)
        {

        }
        public void GetHalfPkmnByAmnt(int amount)
        {

        }




    }
    public interface IPokemonService
    {
        
    } 
}