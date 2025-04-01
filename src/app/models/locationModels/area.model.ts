import { Name, NamedLink, VersionEncounterDetail } from "../core.model";


/**
 * @interface locationArea
 * 
 * @property
 */
/**
 * Represents a specific location area within a game.
 * 
 * @interface locationArea
 * 
 * @property {number} id - The unique identifier for this location area.
 * @property {string} name - The name of the location area.
 * @property {number} game_index - The internal game index for this location area.
 * @property {EncounterMethodRate[]} encounter_method_rates - A list of methods in which Pokémon may be encountered in this area and their likelihood based on the game version.
 * @property {NamedLink} location - The region where this location area is found.
 * @property {Name[]} names - The names of this location area in different languages.
 * @property {pokemon_encoutner[]} pokemon_encounters
 */
export interface locationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: EncounterMethodRate;
    location: NamedLink;
    names: Name[];
    pokemon_encoutners: PokemonEncounter[];
}

/**
 * Represents the rate at which a specific encounter method occurs in a location area.
 * 
 * @interface EncounterMethodRate
 * 
 * @property {NamedLink} encounter_method - The method used to encounter Pokémon in the area.
 * @property {EncounterVersionDetails[]} version_details - A list of details about the encounter rates for specific game versions.
 */
export interface EncounterMethodRate {
    encounter_method: NamedLink;
    version_details: EncounterVersionDetails[];
}

/**
 * Represents the details of an encounter rate for a specific game version.
 * 
 * @interface EncounterVersionDetails
 * 
 * @property {number} rate - The chance of an encounter to occur, represented as an integer.
 * @property {NamedLink} version - The game version in which the encounter can occur with the given chance.
 */
export interface EncounterVersionDetails {
    rate: number;
    version: NamedLink;
}

export interface PokemonEncounter {
    pokemon: NamedLink;
    version_details: VersionEncounterDetail[];
}


/* 

-PokemonEncounter (type)
pokemon             The Pokémon being encountered.                     NamedAPIResource (Pokemon)
version_details     A list of versions and encounters with Pokémon     list VersionEncounterDetail
                    that might happen in the referenced location area.

*/