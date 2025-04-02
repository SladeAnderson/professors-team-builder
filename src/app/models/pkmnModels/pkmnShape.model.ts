import { Name, NamedLink } from "../core.model";

/**
 * Represents the shape of a Pokémon.
 */
export interface pkmnShape {
    /**
     * The unique identifier for the Pokémon shape.
     */
    id: number;

    /**
     * The name of the Pokémon shape.
     */
    name: string;

    /**
     * A list of awesome names associated with the Pokémon shape.
     */
    awesome_names: awesomeName[];

    /**
     * A list of localized names for the Pokémon shape.
     */
    names: Name[];

    /**
     * A list of Pokémon that have this shape.
     */
    pokemon_speices: NamedLink[];
}

/**
 * Represents an awesome name for a Pokémon shape in a specific language.
 *
 * @property awesome_name - The localized name that is considered "awesome".
 * @property language - The language in which the awesome name is localized.
 */
export interface awesomeName {
    awesome_name: string;
    language: NamedLink;
}