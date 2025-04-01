import { Effect, NamedLink } from "../core.model";

/**
 * ItemFlingEffect (type)
 * 
 * Name           |  Description                                         | Type
 * ---------------|------------------------------------------------------|------------------------
 * `id `            |  The identifier for this resource.                   |  `integer`
 * `name `          |  The name for this resource.                         |  `string`
 * `effect_entries` |  The result of this fling effect listed in different languages. |  `list Effect`
 * `items`          |  A list of items that have this fling effect.        |  `list NamedLink (Item)`
 */
export interface itemFlingEffect {
    id: number;

    name: string;

    effect_entries: Effect;

    items: NamedLink;
}