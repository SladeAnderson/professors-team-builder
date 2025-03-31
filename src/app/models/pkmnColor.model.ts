import { Name, NamedLink } from "./core.model";

/**
 * Represents the color information of a Pokémon.
 * 
 * @interface pkmnColor
 * 
 * @property {number} id - The unique identifier for the Pokémon color.
 * @property {string} name - The name of the Pokémon color.
 * @property {Name[]} names - A list of localized names for the Pokémon color.
 * @property {NamedLink[]} pokemon_species - A list of Pokémon species associated with this color.
 */
export interface pkmnColor {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedLink[];
}