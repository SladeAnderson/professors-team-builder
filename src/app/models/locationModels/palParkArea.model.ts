import { Name, NamedLink } from "../core.model";

/**
 * Represents a Pal Park area where Pokémon can be encountered.
 * 
 * @property id - The unique identifier for the Pal Park area.
 * @property name - The name of the Pal Park area.
 * @property names - A list of localized names for the Pal Park area in different languages.
 * @property pokemon_encounters - Details of Pokémon species that can be encountered in this Pal Park area.
 */
export interface PalParkArea {
    id: number;
    name: string;
    names: Name[];
    pokemon_encounters: EncounterSpecies;
}

/**
 * Represents a species of Pokémon encountered in a Pal Park area.
 * 
 * @property base_score - The base score awarded to the player when this Pokémon is caught during a Pal Park run.
 * @property rate - The base rate for encountering this Pokémon in the Pal Park area.
 * @property pokemon_species - A reference to the Pokémon species being encountered.
 */
export interface EncounterSpecies {
    base_score: number;
    rate: number;
    pokemon_species: NamedLink;
}