import { Description, NamedLink } from "../core.model";

/**
 * Represents a category of moves in the application.
 * 
 * @interface moveCategory
 * 
 * @property {number} id - The unique identifier for the move category.
 * @property {string} name - The name of the move category.
 * @property {NamedLink[]} moves - A list of links to moves associated with this category.
 * @property {Description[]} descriptions - A list of descriptions providing details about the move category.
 */
export interface moveCategory {
    id: number;
    name: string;
    moves: NamedLink[];
    descriptions: Description[];
}