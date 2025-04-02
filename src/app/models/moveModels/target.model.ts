import { Description, Name, NamedLink } from "../core.model";

/**
 * Represents a target for a move in the application.
 * 
 * @interface moveTarget
 * 
 * @property {number} id - The unique identifier for the move target.
 * @property {string} name - The name of the move target.
 * @property {Description[]} descriptions - A list of descriptions providing details about the move target.
 * @property {NamedLink[]} moves - A collection of moves associated with the target, represented as named links.
 * @property {Name[]} names - A list of localized names for the move target.
 */
export interface moveTarget {
    id: number;
    name: string;
    descriptions: Description[];
    moves: NamedLink[];
    names: Name[];
}