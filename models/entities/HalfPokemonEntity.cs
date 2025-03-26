using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace professorsTeamBuilder.models.Entities
{
    public class LinkEntity
    {
        public string? Name {get; set;}
        public string? Url {get; set;}
    }
    public class HalfPokemonEntity
    {
        public int Id {get; set;}
        public required string Name {get; set;}
        public int Base_experience {get; set;}
        public int Height {get; set;}
        public bool Is_default {get; set;}
        public int Order {get; set;}
        public int Weight {get; set;}
        public List<AbilityEntity>? Abilities {get; set;}
        public List<LinkEntity>? Forms {get; set;}
        public List<Game_indicyEntity>? Game_indices {get; set;}
        public List<Held_itemEntity>? Held_items {get; set;}
        public string? Location_area_encounters {get; set;}
        public List<MoveEntity>? Moves {get; set;}
        public List<PastTypeEntity>? Past_Types {get; set;}
        public SpritesEntity? Sprites {get; set;}
        public List<StatEntity>? Stats {get; set;}
        public List<PkmnTypeEntity>? Types {get; set;}
    }

    public class AbilityEntity
    {
        public bool Is_hidden {get; set;}
        public int Slot {get; set;}
        public LinkEntity? Ability {get; set;}
    }
    public class Game_indicyEntity
    {
        public int Game_index {get; set;}
        public LinkEntity? Version {get; set;}
    }

    // held items
    public class Held_itemEntity
    {
        public LinkEntity? Item {get; set;}
        public List<Version_detailEntity>? Version_details {get; set;}
    }

    public class Version_detailEntity 
    {
        public int Rarity {get; set;}
        public LinkEntity? Version {get; set;}
    }

    // moves
    public class MoveEntity
    {
        public LinkEntity? Move {get; set;}
        public List<Version_group_detailEntity>? Version_group_details {get; set;}
    }

    public class Version_group_detailEntity
    {
        public int Level_learned_at {get; set;}
        public LinkEntity? Version_group {get; set;}
        public LinkEntity? Move_learn_method {get; set;}
    }

    // Past Types
    public class PastTypeEntity
    {
        public LinkEntity? generation {get; set;}
        public List<PkmnTypeEntity>? Types {get; set;}
    }

    // Sprites Object
    public class SpritesEntity
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

    // stats
    public class StatEntity
    {
        public int Base_stat {get; set;}
        public int Effort {get; set;}
        public LinkEntity? Stat {get; set;}
    }

    // types
    public class PkmnTypeEntity
    {
        public int Slot {get; set;}
        public LinkEntity? Type {get; set;}
    }
}