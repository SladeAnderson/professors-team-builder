import { NamedLink } from './core.model';

/**
 * Represents a Pokémon with detailed information about its attributes, abilities, and other properties.
 */
export interface halfPokemon {
    /**
     * The unique identifier for the Pokémon.
     */
    id: number;

    /**
     * The name of the Pokémon.
     */
    name: string;

    /**
     * The base experience gained for defeating this Pokémon.
     */
    base_experience: number;

    /**
     * The height of the Pokémon in decimetres.
     */
    height: number;

    /**
     * Indicates whether this Pokémon is the default form.
     */
    is_default: boolean;

    /**
     * The order for sorting. Almost identical to the national Pokédex number, except for certain groupings.
     */
    order: number;

    /**
     * The weight of the Pokémon in hectograms.
     */
    weight: number;

    /**
     * A list of abilities this Pokémon could potentially have.
     */
    abilities: ability[];

    /**
     * A list of forms this Pokémon can take on.
     */
    forms: NamedLink[];

    /**
     * A list of game indices relevant to this Pokémon by generation.
     */
    game_indices: game_indice[];

    /**
     * A list of items this Pokémon may be holding when encountered.
     */
    held_items: held_item[];

    /**
     * The location area encounters for this Pokémon.
     */
    location_area_encounters: string;

    /**
     * A list of moves this Pokémon can learn.
     */
    moves: move[];

    /**
     * The species this Pokémon belongs to.
     */
    species: NamedLink;

    /**
     * The sprites used to depict this Pokémon in the game.
     */
    sprites: sprites;

    /**
     * The cries associated with this Pokémon.
     */
    cries: cries;

    /**
     * A list of base stats for this Pokémon.
     */
    stats: stat[];

    /**
     * A list of types this Pokémon has.
     */
    types: type[];

    /**
     * A list of types this Pokémon had in previous generations.
     */
    past_types: past_type[];
}

/**
 * Represents an ability of a Pokémon.
 * 
 * @property is_hidden - Indicates whether the ability is hidden.
 * @property slot - The slot number of the ability.
 * @property ability - A reference to the ability's details, represented by a `NamedLink`.
 */
interface ability {
    /**
    * Indicates whether the ability is hidden.
    */
    is_hidden: boolean;
    /**
    * The slot number of the ability. 
    */
    slot: number;
    /**
    * The ability associated with this Pokémon.
    */
    ability: NamedLink;
}

/**
 * Represents a game index for a Pokémon.
 * 
 * @property game_index - The index of the Pokémon in the game.
 * @property version - A reference to the version details, represented by a `NamedLink`.
 */
interface game_indice {
    /**
     * The index of the Pokémon in the game.
     */
    game_index: number;
    /**
     * A reference to the version details, represented by a `NamedLink`.
     */
    version: NamedLink;
}

/**
 * Represents an item held by a Pokémon along with details about the versions
 * in which the item is held.
 */
interface held_item {
    item: NamedLink;
    version_details: version_detail[];
}

/**
 * Represents the details of a Pokémon version, including its rarity and associated version information.
 *
 * @property {number} rarity - The rarity of the Pokémon in the specified version.
 * @property {NamedLink} version - A reference to the version information, represented as a `NamedLink`.
 */
interface version_detail {
    /**
     * The rarity of the Pokémon in the specified version.
     */
    rarity: number;
    /**
     * A reference to the version information, represented as a `NamedLink`.
     */
    version: NamedLink;
}

/**
 * Represents a Pokémon move along with its associated version group details.
 * 
 * @property move - An object containing the name and URL of the move.
 * @property version_group_details - An array of details specifying how the move
 *                                    behaves in different version groups.
 */
interface move {
    /**
     * An object containing the name and URL of the move.
     */
    move: NamedLink;
    /**
     * An array of details specifying how the move
     * behaves in different version groups.
     */
    version_group_details: version_group_detail[];
}

/**
 * Represents the details of a Pokémon move in a specific version group.
 * 
 * @property level_learned_at - The level at which the Pokémon learns the move.
 * @property version_group - A reference to the version group where the move is available.
 * @property move_learn_method - A reference to the method by which the move is learned (e.g., level-up, TM, etc.).
 */
interface version_group_detail {
    /**
     * The level at which the Pokémon learns the move.
     */
    level_learned_at: number;
    /**
     * A reference to the version group where the move is available.
     */
    version_group: NamedLink;
    /**
     * A reference to the method by which the move is learned (e.g., level-up, TM, etc.).
     */
    move_learn_method: NamedLink;
}

/**
 * Represents the various sprite images for a Pokémon.
 * Each property corresponds to a specific view or variation of the Pokémon's sprite.
 * 
 * @property back_default - The default back-facing sprite of the Pokémon.
 * @property back_female - The back-facing sprite of the female variant of the Pokémon.
 * @property back_shiny - The shiny back-facing sprite of the Pokémon.
 * @property back_shiny_female - The shiny back-facing sprite of the female variant of the Pokémon.
 * @property front_default - The default front-facing sprite of the Pokémon.
 * @property front_female - The front-facing sprite of the female variant of the Pokémon.
 * @property front_shiny - The shiny front-facing sprite of the Pokémon.
 * @property front_shiny_female - The shiny front-facing sprite of the female variant of the Pokémon.
 */
interface sprites {
    /**
     * The default back-facing sprite of the Pokémon.
     */
    back_default: string;
    /**
     * The back-facing sprite of the female variant of the Pokémon.
     */
    back_female: string;
    /**
     * The shiny back-facing sprite of the Pokémon.
     */
    back_shiny: string;
    /**
     * The shiny back-facing sprite of the female variant of the Pokémon.
     */
    back_shiny_female: string;
    /**
     * The default front-facing sprite of the Pokémon.
     */
    front_default: string;
    /**
     *  The front-facing sprite of the female variant of the Pokémon.
     */
    front_female: string;
    /**
     * The shiny front-facing sprite of the Pokémon.
     */
    front_shiny: string;
    /**
     * The shiny front-facing sprite of the female variant of the Pokémon.
     */
    front_shiny_female: string;
}

/**
 * Represents the cry sounds of a Pokémon.
 * @property latest - The most recent cry sound of the Pokémon.
 * @property legacy - The older or legacy cry sound of the Pokémon.
 */
interface cries {
    /**
     * The most recent cry sound of the Pokémon.
     */
    latest: string;
    /**
     * The older or legacy cry sound of the Pokémon.
     */
    legacy: string;
}

/**
 * Represents a Pokémon's individual stat information.
 * 
 * @property base_stat - The base value of the stat.
 * @property effort - The effort value (EV) associated with the stat.
 * @property stat - A reference to the stat's name and URL.
 */
interface stat {
    /**
     * The base value of the stat.
     */
    base_stat: number;
    /**
     * The effort value (EV) associated with the stat.
     */
    effort: number;
    /**
     *  A reference to the stat's name and URL.
     */
    stat: NamedLink;
}

/**
 * Represents a Pokémon type with its associated slot and type details.
 * 
 * @property slot - The slot number indicating the order of the type.
 * @property type - An object containing details about the type, represented by a `NamedLink`.
 */
export interface type {
    /**
     * The slot number indicating the order of the type.
     */
    slot: number;
    /**
     * An object containing details about the type, represented by a `NamedLink`.
     */
    type: NamedLink;
}

/**
 * Represents a past type of a Pokémon, including the generation in which
 * the type was relevant and the list of types associated with it.
 *
 * @property generation - A reference to the generation where this type was used.
 * @property types - An array of types associated with the Pokémon in the specified generation.
 */
interface past_type {
    /**
     * A reference to the generation where this type was used.
     */
    generation: NamedLink;
    /**
     * An array of types associated with the Pokémon in the specified generation.
     */
    types: type[]
}