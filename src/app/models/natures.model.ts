import { Name, NamedLink } from "./core.model";

/**
 * Represents a Pokémon nature, which affects stat growth and preferences.
 */
export interface nature {
    /**
     * The unique identifier for the nature.
     */
    id: number;

    /**
     * The name of the nature.
     */
    name: string;

    /**
     * The stat that is decreased by this nature.
     * @see NamedLink
     */
    decreased_stat: NamedLink;

    /**
     * The stat that is increased by this nature.
     * @see NamedLink
     */
    increased_stat: NamedLink;

    /**
     * The berry flavor that Pokémon with this nature dislike.
     * @see NamedLink
     */
    hates_flavor: NamedLink;

    /**
     * The berry flavor that Pokémon with this nature like.
     * @see NamedLink
     */
    likes_flavor: NamedLink;

    /**
     * Changes to Pokeathlon stats caused by this nature.
     */
    pokeathlon_stat_changes: natureStatChange[];

    /**
     * Preferences for move battle styles based on HP levels.
     */
    move_battle_style_preferences: moveBattleStylePreference[];

    /**
     * Localized names for the nature.
     */
    names: Name[];
}

/**
 * Represents a change to a Pokeathlon stat caused by a nature.
 */
export interface natureStatChange {
    /**
     * The maximum change to the Pokeathlon stat.
     */
    max_change: number;

    /**
     * The Pokeathlon stat affected by this change.
     * @see NamedLink
     */
    pokeathlon_stat: NamedLink;
}

/**
 * Represents a preference for a move battle style based on HP levels.
 */
export interface moveBattleStylePreference {
    /**
     * The preference for the move battle style when HP is low.
     */
    low_hp_preference: number;

    /**
     * The preference for the move battle style when HP is high.
     */
    high_hp_preference: number;

    /**
     * The move battle style associated with this preference.
     * @see NamedLink
     */
    move_battle_style: NamedLink;
}