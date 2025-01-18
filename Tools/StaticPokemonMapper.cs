using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using professorsTeamBuilder.models.DTO;
using professorsTeamBuilder.models.Entities;

namespace professorsTeamBuilder.Tools
{
    public static class StaticPokemonMapper
    {
        // ABILITIES

    public static AbilityDTO MapInfo(this AbilityEntity ability)
    {
      return new AbilityDTO()
      {
       Is_hidden = ability.Is_hidden,
       Slot = ability.Slot,
       Ability = ability.Ability?.MapInfo(),
      };
    }

    public static AbilityEntity MapInfo(this AbilityDTO ability)
    {
      return new AbilityEntity()
      {
        Is_hidden = ability.Is_hidden,
        Slot = ability.Slot,
        Ability = ability.Ability?.MapInfo(),
      };
    }

        // LINKS

    public static LinkDTO MapInfo(this LinkEntity link)
    {
      return new LinkDTO()
      {
        Name = link.Name,
        Url = link.Url,
      };
    }

    public static LinkEntity MapInfo(this LinkDTO link)
    {
      return new LinkEntity()
      {
        Name = link.Name,
        Url = link.Url
      };
    }

        // GAME INDICIYS

    public static Game_indicyDTO MapInfo(this Game_indicyEntity game_Indicie)
    {
      return new Game_indicyDTO()
      {
        Game_index = game_Indicie.Game_index,
        Version = game_Indicie.Version?.MapInfo(),
      };
    }

    public static Game_indicyEntity MapInfo(this Game_indicyDTO game_Indicie)
    {
      return new Game_indicyEntity(){
        Game_index = game_Indicie.Game_index,
        Version = game_Indicie.Version?.MapInfo(),
      };
    }

        // Held Items

    public static Held_itemDTO MapInfo(this Held_itemEntity held_Item)
    {
      return new Held_itemDTO()
      {
        Item = held_Item.Item?.MapInfo(),
        Version_details = held_Item.Version_details?.Select(x=>{
            return x.MapInfo();
        }).ToList()
      };
    }

    public static Held_itemEntity MapInfo(this Held_itemDTO held_Item)
    {
        return new Held_itemEntity()
        {
            Item = held_Item.Item?.MapInfo(),
            Version_details = held_Item.Version_details?.Select(x=>{
            return x.MapInfo();
            }).ToList()
        };
    }

        // Version Details

    public static Version_detailDTO MapInfo(this Version_detailEntity version_detail)
    {
      return new Version_detailDTO()
      {
        Rarity = version_detail.Rarity,
        Version = version_detail.Version?.MapInfo(),
      };
    }

    public static Version_detailEntity MapInfo(this Version_detailDTO version_detail)
    {
      return new Version_detailEntity()
      {
        Rarity = version_detail.Rarity,
        Version = version_detail.Version?.MapInfo(),
      };
    }

        // Moves

    public static MoveDTO MapInfo(this MoveEntity move)
    {
      return new MoveDTO()
      {
        Move = move.Move?.MapInfo(),
        Version_group_details = move.Version_group_details?.Select(x=>x.MapInfo()).ToList(),
      };
    }

    public static MoveEntity MapInfo(this MoveDTO move)
    {
      return new MoveEntity()
      {
        Move = move.Move?.MapInfo(),
        Version_group_details = move.Version_group_details?.Select(x=>x.MapInfo()).ToList(),
      };
    }

        // Version Group Deatils 

    public static Version_group_detailDTO MapInfo(this Version_group_detailEntity groupDetails)
    {
        return new Version_group_detailDTO()
        {
            Level_learned_at = groupDetails.Level_learned_at,
            Version_group = groupDetails.Version_group?.MapInfo(),
            Move_learn_method = groupDetails.Move_learn_method?.MapInfo(),
        };
    }

    public static Version_group_detailEntity MapInfo(this Version_group_detailDTO groupDetails)
    {
        return new Version_group_detailEntity(){
            Level_learned_at = groupDetails.Level_learned_at,
            Version_group = groupDetails.Version_group?.MapInfo(),
            Move_learn_method = groupDetails.Move_learn_method?.MapInfo(),
        };

    }
        // Past Pkmn Types

    public static PastTypeDTO MapInfo(this PastTypeEntity pastType)
    {
      return new PastTypeDTO()
      {
        generation = pastType.generation?.MapInfo(),
        Types = pastType.Types?.Select(x=>x.MapInfo()).ToList(),
      };
    }

    public static PastTypeEntity MapInfo(this PastTypeDTO pastType)
    {
      return new PastTypeEntity()
      {
        generation = pastType.generation?.MapInfo(),
        Types = pastType.Types?.Select(x=>x.MapInfo()).ToList(),
      };
    }

        // Pkmn Sprites obj

    public static SpritesDTO MapInfo(this SpritesEntity sprites)
    {
      return new SpritesDTO() 
      {
        Back_default = sprites.Back_default,
        Back_female = sprites.Back_female,
        Back_shiny = sprites.Back_shiny,
        Back_shiny_female = sprites.Back_shiny_female,
        Front_default = sprites.Front_default,
        Front_female = sprites.Front_female,
        Front_shiny = sprites.Front_shiny,
        Front_shiny_default = sprites.Front_shiny_default,
      };
    }

    public static SpritesEntity MapInfo(this SpritesDTO sprites)
    {
      return new SpritesEntity()
      {
        Back_default = sprites.Back_default,
        Back_female = sprites.Back_female,
        Back_shiny = sprites.Back_shiny,
        Back_shiny_female = sprites.Back_shiny_female,
        Front_default = sprites.Front_default,
        Front_female = sprites.Front_female,
        Front_shiny = sprites.Front_shiny,
        Front_shiny_default = sprites.Front_shiny_default,
      };
    }

        // stats

    public static StatDTO MapInfo(this StatEntity stat)
    {
      return new StatDTO()
      {
        Base_stat = stat.Base_stat,
        Effort = stat.Effort,
        Stat = stat.Stat?.MapInfo(),
      };
    }

    public static StatEntity MapInfo(this StatDTO stat)
    {
        return new StatEntity()
        {
          Base_stat = stat.Base_stat,
          Effort = stat.Effort,
          Stat = stat.Stat?.MapInfo(),
        };
    }

        // Pkmn Types

    public static PkmnTypeDTO MapInfo(this PkmnTypeEntity type)
    {
      return new PkmnTypeDTO()
      {
        Slot = type.Slot,
        Type = type.Type?.MapInfo(),
      };
    }

    public static PkmnTypeEntity MapInfo(this PkmnTypeDTO type)
    {
      return new PkmnTypeEntity()
      {
        Slot = type.Slot,
        Type = type.Type?.MapInfo(),
      };
    }
    }
}