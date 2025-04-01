import { Name, NamedLink } from "../core.model";

/**
 * ## Generation (type)
 * 
 * | Name              | Description                                              | Type                              |
 * |-------------------|----------------------------------------------------------|-----------------------------------|
 * | `id`             | The identifier for this resource.                                  | `integer`                        |
 * | `name`           | The name for this resource.                                        | `string`                         |
 * | `abilities`      | A list of abilities that were introduced in this generation.       | `list NamedLink` |
 * | `names`          | The name of this resource listed in different languages.           | `list Name`                      |
 * | `main_region`    | The main region travelled in this generation.                      | `NamedLink`      |
 * | `moves`          | A list of moves that were introduced in this generation.           | `list NamedLink`   |
 * | `pokemon_species`| A list of Pokémon species that were introduced in this generation. | `list NamedLink` |
 * | `types`          | A list of types that were introduced in this generation.           | `list NamedLink`   |
 * | `version_groups` | A list of version groups that were introduced in this generation.  | `list NamedLink ` |
 */
export interface Generation {
    id: number;
    name: string;
    abilities: NamedLink[];
    names: Name[];
    main_region: NamedLink;
    moves: NamedLink[];
    pokemon_species: NamedLink[];
    types: NamedLink;
    version_groups: NamedLink;
}

