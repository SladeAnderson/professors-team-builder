using professorsTeamBuilder.models.DTO;
using professorsTeamBuilder.models.Entities;

namespace professorsTeamBuilder.Tools
{
    public class PkmnMapper : IPkmnMapper
    {
        public HalfPokemonDTO MapHalfPkmn(HalfPokemonEntity pkmn)
        {
            return new HalfPokemonDTO(){
                Id = pkmn.Id,
                Name = pkmn.Name,
                Base_experience = pkmn.Base_experience,
                Height = pkmn.Height,
                Is_default = pkmn.Is_default,
                Order = pkmn.Order,
                Weight = pkmn.Weight,
                Abilities = pkmn.Abilities?.Select(x=>x.MapInfo()).ToList(),
                Forms = pkmn.Forms?.Select(x=>x.MapInfo()).ToList(),
                Game_indices = pkmn.Game_indices?.Select(x=>x.MapInfo()).ToList(),
                Held_items = pkmn.Held_items?.Select(x=>x.MapInfo()).ToList(),
                Location_area_encounters = pkmn.Location_area_encounters,
                Moves = pkmn.Moves?.Select(x=>x.MapInfo()).ToList(),
                Past_Types = pkmn.Past_Types?.Select(x=>x.MapInfo()).ToList(),
                Sprites = pkmn.Sprites?.MapInfo(),
                Stats = pkmn.Stats?.Select(x=>x.MapInfo()).ToList(),
                Types = pkmn.Types?.Select(x=>x.MapInfo()).ToList()
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