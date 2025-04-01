import { GenerationGameIndex, Link, MachineVersionDetail, Name, NamedLink, VerboseEffect, VersionGroupFlavorText } from "../core.model";

/**
 * ## Item (type)
 * 
 * | Name               | Description                                                        | Type                                   |
 * |--------------------|--------------------------------------------------------------------|----------------------------------------|
 * | `id`                 | The identifier for this resource.                                     | `integer`                               |
 * | `name`               | The name for this resource.                                           | `string`                                |
 * | `cost`               | The price of this item in stores.                                     | `integer`                               |
 * | `fling_power`        | The power of the move Fling when used with this item.                 | `integer`                               |
 * | `fling_effect`       | The effect of the move Fling when used with this item.                | `NamedLink (ItemFlingEffect)`           |
 * | `attributes`         | A list of attributes this item has.                                   | `list Namedlink`                        |
 * | `category`           | The category of items this item falls into.                           | `NamedLink`                             |
 * | `effect_entries`     | The effect of this ability listed in different languages.             | `list VerboseEffect`                    |
 * | `flavor_text_entries`| The flavor text of this ability listed in different languages.        | `list VersionGroupFlavorText`           |
 * | `game_indices`       | A list of game indices relevant to this item by generation.           | `list GenerationGameIndex`              |
 * | `names`              | The name of this item listed in different languages.                  | `list Name`                             |
 * | `sprites`            | A set of sprites used to depict this item in the game.                | `ItemSprites`                           |
 * | `held_by_pokemon`    | A list of Pokémon that might be found in the wild holding this item.  | `list ItemHolderPokemon`                |
 * | `baby_trigger_for`   | An evolution chain this item requires to produce a baby during mating.| `Link`                                  |
 * | `machines`           | A list of the machines related to this item.                          | `list MachineVersionDetail`             |
 */
export interface Item {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: NamedLink;
    attributes: NamedLink[];
    category: NamedLink;
    effect_entries: VerboseEffect[];
    flavor_text_entries: VersionGroupFlavorText[];
    game_indices: GenerationGameIndex[];
    names: Name[];
    sprites: ItemSprites;
    held_by_pokemon: ItemHolderPokemon[];
    baby_trigger_for: Link;
    machines: MachineVersionDetail[];
}

/**
 * ## ItemSprites (type)
 * 
 * | Name    | Description                           | Type   |
 * |---------|-------------------------------------- |--------|
 * | `default` | The default depiction of this item. | `string `|
 */
export interface ItemSprites {
    default: string;
}


/**
 * ## ItemHolderPokemon (type)
 * 
 * | Name            | Description                                           | Type                              |
 * |-----------------|-------------------------------------------------------|-----------------------------------|
 * | `pokemon `        | The Pokémon that holds this item.                                     | `NamedLink (Pokemon) `             |
 * | `version_details` | The details for the version that this item is held in by the Pokémon. | `list ItemHolderPokemonVersionDetai`l |
 */
export interface ItemHolderPokemon {
    pokemon: NamedLink;
    version_details: ItemHolderPokemonVersionDetail[];
}

/**
 * ## ItemHolderPokemonVersionDetail (type)
 * 
 * | Name    | Description                                           | Type                     |
 * |---------|-------------------------------------------------------|--------------------------|
 * | `rarity ` | How often this Pokémon holds this item in this version. | `integer `                 |
 * | version | The version that this item is held in by the Pokémon.   | `NameLink` |
 */
export interface ItemHolderPokemonVersionDetail {
    rarity: number;
    version: NamedLink;
}