import { Effect, Language, Name, NamedLink, VerboseEffect } from "./core.model";

/**
 * Represents an ability in the application.
 * 
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property is_main_series - Indicates whether this ability originated in the main series of the video games.
 * @property generation - The generation to which this ability belongs.
 * @property names - The name of this resource listed in different languages.
 * @property effect_entries - A list of verbose effects for this ability.
 * @property effect_changes - A list of changes to the effects of this ability over time.
 * @property flavor_text_entries - The flavor text of this ability listed in different languages.
 * @property pokemon - A list of Pokémon that could potentially have this ability.
 */
export interface Ability {
    id: number;
    name: string; 
    is_main_series: boolean; 
    generation: NamedLink; 
    names: Name[]; 
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[]; 
    pokemon: AbilityPkmn[]; 
}

/**
 * Represents a change in the effect of an ability across different version groups.
 */
export interface AbilityEffectChange {
    effect_entries: Effect[];
    version_group: NamedLink;
}

/**
 * Represents the flavor text of an ability, including its language and version group.
 */
export interface AbilityFlavorText {
    flavor_text: string;
    language: Language;
    version_group: NamedLink; 
}

/**
 * Represents an ability of a Pokémon.
 */
export interface AbilityPkmn {
    /**
     * Indicates whether the ability is hidden.
     */
    is_hidden: boolean;

    /**
     * The slot number of the ability.
     */
    slot: number;

    /**
     * The Pokémon associated with this ability.
     */
    pokemon: NamedLink; // Pokemon
}