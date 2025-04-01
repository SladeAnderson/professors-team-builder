import { Effect, FlavorText } from "../core.model";

/**
 * ## ContestEffect (type)
 * 
 * | Name                   | Description                                                           | Type              |
 * |------------------------|-----------------------------------------------------------------------|-------------------|
 * |`id`                    | The identifier for this resource.                                     | `number`          |
 * |`appeal`                | The base number of hearts the user of this move gets.                 | `number`          |
 * |`jam`                   | The base number of hearts the user's opponent loses.                  | `number`          |
 * |`effect_entries`        | The result of this contest effect listed in different languages.      | `list Effect`     | 
 * |`flavor_text_entries`   | The flavor text of this contest effect listed in different languages. | `list FlavorText` | 
 */
export interface contestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: Effect[];
    flavor_text_entries: FlavorText[];
}