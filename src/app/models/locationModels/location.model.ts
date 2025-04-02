import { GenerationGameIndex, Name, NamedLink } from "../core.model";

/**
 * Represents a location in the application.
 * 
 * @property {number} id - The identifier for this resource.
 * @property {string} name - The name for this resource.
 * @property {NamedLink} region - The region this location can be found in.
 * @property {Name[]} names - The name of this resource listed in different languages.
 * @property {GenerationGameIndex[]} game_indices - A list of game indices relevant to this location by generation.
 * @property {NamedLink} areas - Areas that can be found within this location.
 */
export interface location {
    id: number;
    name: string;
    region: NamedLink;
    names: Name[];
    game_indices: GenerationGameIndex[];
    areas: NamedLink;    
}
