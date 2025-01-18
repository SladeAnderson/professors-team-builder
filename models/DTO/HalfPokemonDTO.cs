using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace professorsTeamBuilder.models.DTO
{
    public class LinkDTO
    {
        public string? Name {get; set;}
        public string? Url {get; set;} 
    }
    public class HalfPokemonDTO
    {
        public int Id {get; set;}
        public required string Name {get; set;}
        public int Base_experience {get; set;}
        public int Height {get; set;}
        public bool Is_default {get; set;}
        public int Order {get; set;}
        public int Weight {get; set;}
        public List<AbilityDTO>? Abilities {get; set;}
        public List<LinkDTO>? Forms {get; set;}
        public List<Game_indicyDTO>? Game_indices {get; set;}
        public List<Held_itemDTO>? Held_items {get; set;}
        public string? Location_area_encounters {get; set;}
        public List<MoveDTO>? Moves {get; set;}
        public List<PastTypeDTO>? Past_Types {get; set;}
        public SpritesDTO? Sprites {get; set;}
        public List<StatDTO>? Stats {get; set;}
        public List<PkmnTypeDTO>? Types {get; set;}
    }
    public class AbilityDTO
    {
        public bool Is_hidden {get; set;}
        public int Slot {get; set;}
        public LinkDTO? Ability {get; set;}
    }
    public class Game_indicyDTO
    {
        public int Game_index {get; set;}
        public LinkDTO? Version {get; set;}
    }
    public class Held_itemDTO
    {
        public LinkDTO? Item {get; set;}
        public List<Version_detailDTO>? Version_details {get; set;}
    }

    public class Version_detailDTO 
    {
        public int Rarity {get; set;}
        public LinkDTO? Version {get; set;}
    }

    public class MoveDTO
    {
        public LinkDTO? Move {get; set;}
        public List<Version_group_detailDTO>? Version_group_details {get; set;}
    }

    public class Version_group_detailDTO
    {
        public int Level_learned_at {get; set;}
        public LinkDTO? Version_group {get; set;}
        public LinkDTO? Move_learn_method {get; set;}
    }

    public class PastTypeDTO
    {
        public LinkDTO? generation {get; set;}
        public List<PkmnTypeDTO>? Types {get; set;}
    }
    public class SpritesDTO
    {
        public string? Back_default {get; set;}
        public string? Back_female {get; set;}
        public string? Back_shiny {get; set;}
        public string? Back_shiny_female {get; set;}
        public string? Front_default {get; set;}
        public string? Front_female {get; set;}
        public string? Front_shiny {get; set;}
        public string? Front_shiny_default {get; set;}

    }
    public class StatDTO
    {
        public int Base_stat {get; set;}
        public int Effort {get; set;}
        public LinkDTO? Stat {get; set;}
    }
    public class PkmnTypeDTO
    {
        public int Slot {get; set;}
        public LinkDTO? Type {get; set;}
    }
    
}