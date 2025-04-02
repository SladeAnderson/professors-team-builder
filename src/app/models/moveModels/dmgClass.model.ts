import { Description, Name, NamedLink } from "../core.model";

/**
 * Represents a damage class for a move in the Pokemon.
 * 
 * @interface moveDmgClass
 * 
 * @property {number} id - The unique identifier for the damage class.
 * @property {string} name - The name of the damage class.
 * @property {Description[]} descriptions - A list of localized descriptions for the damage class.
 * @property {NamedLink[]} moves - A list of moves associated with this damage class.
 * @property {Name[]} names - A list of localized names for the damage class.
 */
export interface moveDmgClass {
    id: number;
    name: string;
    descriptions: Description[];
    moves: NamedLink[];
    names: Name[];
}