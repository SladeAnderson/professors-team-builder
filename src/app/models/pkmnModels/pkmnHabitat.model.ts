import { Name, NamedLink } from "../core.model";

/**
 * Represents a Pokémon habitat.
 * 
 * @interface pkmnHabitat
 * 
 * @property {number} id - The unique identifier for the habitat.
 * @property {string} name - The name of the habitat.
 * @property {Name[]} names - A list of localized names for the habitat.
 * @property {NamedLink[]} pokemon_speices - A list of Pokémon species associated with the habitat.
 */
export interface pkmnHabitat {
    id: number;
    name: string;
    names: Name[];
    pokemon_speices: NamedLink[]; 
}