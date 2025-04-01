import { FlavorText, NamedLink } from "../core.model";

/**
 * ## SuperContestEffect (type)
 * 
 * | Name                 | Description                                                         | Type                           | 
 * |----------------------|---------------------------------------------------------------------|--------------------------------|
 * | `id`                 |  The identifier for this resource.                                  | `number`                       |
 * | `appeal`             |  The level of appeal this super contest effect has.                 | `number`                       |
 * | `flavor_text_entries`|  The flavor text of this super contest effect in various languages. | `FlavorText[]`                 |
 * | `moves`              |  A list of moves that have this effect in super contests.           | `NamedLink[] (Move)`           |
 */
export interface contestSuperEffect {
    id: number;
    appeal: number;
    flavor_text_entries: FlavorText[];
    moves: NamedLink[];
}