import { Name, NamedLink } from "../core.model";

/**
 * Represents a Pokéathlon stat, which is a characteristic of a Pokémon
 * used in the Pokéathlon competitions.
 */
export interface PokeathlonStat {
    /**
     * The unique identifier for this Pokéathlon stat resource.
     */
    id: number;

    /**
     * The name of this Pokéathlon stat resource.
     */
    name: string;

    /**
     * The localized names of this Pokéathlon stat in different languages.
     */
    names: Name[];

    /**
     * Details of natures that positively or negatively affect this Pokéathlon stat.
     */
    affecting_natures: NaturePokeathlonStatAffectSets;
}

/**
 * Represents the sets of natures that affect a Pokéathlon stat,
 * categorized by whether they increase or decrease the stat.
 */
export interface NaturePokeathlonStatAffectSets {
    /**
     * A list of natures and their effects that increase the referenced Pokéathlon stat.
     */
    increase: NaturePokeathlonStatAffect[];

    /**
     * A list of natures and their effects that decrease the referenced Pokéathlon stat.
     */
    decrease: NaturePokeathlonStatAffect[];
}

/**
 * Represents the effect of a specific nature on a Pokéathlon stat.
 */
export interface NaturePokeathlonStatAffect {
    /**
     * The maximum amount by which the referenced Pokéathlon stat is changed.
     */
    max_change: number;

    /**
     * The nature that causes the change in the referenced Pokéathlon stat.
     */
    nature: NamedLink;
}