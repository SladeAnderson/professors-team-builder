using professorsTeamBuilder.models.DTO;
using professorsTeamBuilder.models.Entities;

namespace professorsTeamBuilder.Tools
{
    public class PkmnMapper : IPkmnMapper
    {
        public HalfPokemonDTO MapHalfPkmn(HalfPokemonEntity pkmn)
        {
            return new HalfPokemonDTO(){
                Id=pkmn.Id,
                Name=pkmn.Name,
                Base_experience=pkmn.Base_experience,
                Height=pkmn.Height,
                Is_default=pkmn.Is_default,
                Order=pkmn.Order,
                Weight=pkmn.Weight,
            };
        }

        public HalfPokemonEntity MapHalfPkmn(HalfPokemonDTO pkmn)
        {
            throw new NotImplementedException();
        }
    }



    public interface IPkmnMapper
    {
        HalfPokemonDTO MapHalfPkmn(HalfPokemonEntity pkmn);
        HalfPokemonEntity MapHalfPkmn(HalfPokemonDTO pkmn);
        //-------- Add complete pokemon models later --------\\ 
    }
}