import { Description, Name, NamedLink } from "../core.model";

/**
 * Represents a method by which a move can be learned in a game.
 *
 * @interface moveLearnMethod
 * 
 * @property {number} id - The unique identifier for the move learn method.
 * @property {string} name - The name of the move learn method.
 * @property {Description[]} descriptions - A list of localized descriptions for the move learn method.
 * @property {Name[]} names - A list of localized names for the move learn method.
 * @property {NamedLink[]} version_groups - A list of version groups where this move learn method is applicable.
 */
export interface moveLearnMethod {
    id: number;
    name: string;
    descriptions: Description[];
    names: Name[];
    version_groups: NamedLink[];
}