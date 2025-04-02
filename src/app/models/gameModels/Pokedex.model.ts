import { Description, Name, NamedLink } from "../core.model";

/**
 *  ## Pokedex (type)
 *
 * | Name              | Description                                                        | Type                          |
 * |-------------------|--------------------------------------------------------------------|-------------------------------|
 * | `id`             | The identifier for this resource.                                  | `integer`                    |
 * | `name`           | The name for this resource.                                        | `string`                     |
 * | `is_main_series` | Whether or not this Pokédex originated in the main series of the video games. | `boolean`                    |
 * | `descriptions`   | The description of this resource listed in different languages.    | `list Description`           |
 * | `names`          | The name of this resource listed in different languages.           | `list Name`                  |
 * | `pokemon_entries`| A list of Pokémon catalogued in this Pokédex and their indexes.    | `list PokemonEntry`          |
 * | `region`         | The region this Pokédex catalogues Pokémon for.                    | `NamedLink (Region)`  |
 * | `version_groups` | A list of version groups this Pokédex is relevant to.              | `list NamedLink (VersionGroup)` |
 */
export interface Pokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Description[];
    names: Name[];
    pokemon_entries: PkmnEntry[];
    region: NamedLink;
    version_groups: NamedLink[];
}

/**
 * ## PokemonEntry (type)
 *
 * | Name           | Description                                                | Type                              |
 * |----------------|------------------------------------------------------------|-----------------------------------|
 * | `entry_number` | The index of this Pokémon species entry within the Pokédex.| `integer`                        |
 * | `pokemon_species` | The Pokémon species being encountered.                  | `NamedLink (PokemonSpecies)` |
 */
export interface PkmnEntry {
    entry_number: number;
    pokemon_species: NamedLink
}