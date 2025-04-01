import { NamedLink } from "../core.model";


/**
 * ## VersionGroup (type)
 * 
 * | Name               | Description                                                                 | Type                              |
 * |--------------------|-----------------------------------------------------------------------------|-----------------------------------|
 * | `id`              | The identifier for this resource.                                           | `integer`                        |
 * | `name`            | The name for this resource.                                                 | `string`                         |
 * | `order`           | Order for sorting. Almost by date of release, except similar versions are grouped together. | `integer`                        |
 * | `generation`      | The generation this version was introduced in.                              | `NamedLink (Generation)`  |
 * | `move_learn_methods` | A list of methods in which Pokémon can learn moves in this version group. | `list NamedLink (MoveLearnMethod)` |
 * | `pokedexes`       | A list of Pokédexes introduced in this version group.                       | `list NamedLink (Pokedex)` |
 * | `regions`         | A list of regions that can be visited in this version group.                | `list NamedLink (Region)`  |
 * | `versions`        | The versions this version group owns.                                       | `list NamedLink (Version)` |
 */
export interface version_group {
    id: number;
    name: string;
    order: number;
    generation: NamedLink;
    move_learn_methods: NamedLink[];
    pokedexes: NamedLink[];
    regions: NamedLink[];
    versions: NamedLink[];
}