import { NamedLink,Name } from "../core.model";

/**
 * Represents the alignment of moves within a specific context.
 * 
 * @interface moveAlignment
 * 
 * @property {number} id - The unique identifier for the move alignment.
 * @property {string} name - The name of the move alignment.
 * @property {NamedLink[]} moves - A list of moves associated with this alignment, represented as named links.
 * @property {Name[]} names - A collection of localized names for the move alignment.
 */
export interface moveAlignment {
    id: number;	
    name: string;
    moves: NamedLink[];
    names: Name[];
}
