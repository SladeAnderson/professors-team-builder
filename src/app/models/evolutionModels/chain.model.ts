import { NamedLink } from "../core.model";

/**
 * ## EvolutionChain (type)
 * 
 * | Name               | Description                                                                                          | Type                |
 * |--------------------|------------------------------------------------------------------------------------------------------|---------------------|
 * | `id`              | The identifier for this resource.                                                                    | `number`            |
 * | `baby_trigger_item`| The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon. | `NamedLink`         |
 * | `chain`           | The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order. | `ChainLink`         |
 */
export interface EvolutionChain {
    id: number;
    baby_trigger_item: NamedLink;
    chain: ChainLink;   
}

/**
 * ## ChainLink (type)
 * 
 * | Name               | Description                                                                                          | Type                          |
 * |--------------------|------------------------------------------------------------------------------------------------------|-------------------------------|
 * | `is_baby`          | Whether or not this link is for a baby Pokémon. This would only ever be true on the base link.       | `boolean`                    |
 * | `species`          | The Pokémon species at this point in the evolution chain.                                           | `NamedLink (PokemonSpecies)` |
 * | `evolution_details`| All details regarding the specific details of the referenced Pokémon species evolution.              | `list EvolutionDetail`       |
 * | `evolves_to`       | A List of chain objects.                                                                            | `list ChainLink`             |
 */
export interface ChainLink {
    is_baby: boolean;
    species: NamedLink;
    evolution_details: EvolutionDetail[];
    evolves_to: ChainLink[];
}

/**
 * ## EvolutionDetail (type)
 * 
 * | Name                   | Description                                                                                          | Type                          |
 * |------------------------|------------------------------------------------------------------------------------------------------|-------------------------------|
 * | `item`                | The item required to cause evolution into this Pokémon species.                                      | `NamedLink (Item)`    |
 * | `trigger`             | The type of event that triggers evolution into this Pokémon species.                                 | `NamedLink (EvolutionTrigger)` |
 * | `gender`              | The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. | `integer`                    |
 * | `held_item`           | The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. | `NamedLink (Item)`    |
 * | `known_move`          | The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. | `NamedLink (Move)`    |
 * | `known_move_type`     | The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. | `NamedLink (Type)`    |
 * | `location`            | The location the evolution must be triggered at.                                                    | `NamedLink (Location)`|
 * | `min_level`           | The minimum required level of the evolving Pokémon species to evolve into this Pokémon species.      | `integer`                    |
 * | `min_happiness`       | The minimum required level of happiness of the evolving Pokémon species to evolve into this Pokémon species. | `integer`                    |
 * | `min_beauty`          | The minimum required level of beauty of the evolving Pokémon species to evolve into this Pokémon species. | `integer`                    |
 * | `min_affection`       | The minimum required level of affection of the evolving Pokémon species to evolve into this Pokémon species. | `integer`                    |
 * | `needs_overworld_rain`| Whether or not it must be raining in the overworld to cause evolution into this Pokémon species.      | `boolean`                    |
 * | `party_species`       | The Pokémon species that must be in the player's party in order for the evolving Pokémon species to evolve into this Pokémon species. | `NamedLink (PokemonSpecies)` |
 * | `party_type`          | The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species. | `NamedLink (Type)`    |
 * | `relative_physical_stats` | The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. | `integer`                    |
 * | `time_of_day`         | The required time of day. Day or night.                                                             | `string`                     |
 * | `trade_species`       | Pokémon species for which this one must be traded.                                                 | `NamedLink (PokemonSpecies)` |
 * | `turn_upside_down`    | Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.                    | `boolean`                    |
 */
export interface EvolutionDetail {
    item: NamedLink;
    trigger: NamedLink;
    gender: number;
    held_item: NamedLink;
    known_move: NamedLink;
    known_move_type: NamedLink;
    location: NamedLink;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: NamedLink;
    party_type: NamedLink;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: NamedLink;
    turn_upside_down: boolean;
}