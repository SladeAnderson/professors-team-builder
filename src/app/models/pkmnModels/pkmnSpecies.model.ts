import { Description, FlavorText, Link, Name, NamedLink } from '../core.model';

/**
 * Represents a Pokémon species with detailed information.
 */
export interface PokemonSpecies {
    /**
     * The unique identifier for the Pokémon species.
     */
    id: number;

    /**
     * The name of the Pokémon species.
     */
    name: string;

    /**
     * The order in which the Pokémon species should be displayed.
     * This is sometimes arbitrary and not always related to the Pokémon's ID.
     */
    order: number;

    /**
     * The gender rate of the Pokémon species.
     * -1 indicates a genderless species.
     */
    gender_rate: number;

    /**
     * The base capture rate of the Pokémon species.
     */
    capture_rate: number;

    /**
     * The base happiness of the Pokémon species.
     */
    base_happiness: number;

    /**
     * Indicates if the Pokémon species is a baby Pokémon.
     */
    is_baby: boolean;

    /**
     * Indicates if the Pokémon species is legendary.
     */
    is_legendary: boolean;

    /**
     * Indicates if the Pokémon species is mythical.
     */
    is_mythical: boolean;

    /**
     * The number of cycles required to hatch an egg of this Pokémon species.
     */
    hatch_counter: number;

    /**
     * Indicates if the Pokémon species has gender differences.
     */
    has_gender_differences: boolean;

    /**
     * Indicates if the forms of the Pokémon species are switchable.
     */
    forms_switchable: boolean;

    /**
     * The growth rate of the Pokémon species.
     */
    growth_rate: NamedLink;

    /**
     * The Pokédex numbers associated with the Pokémon species.
     */
    pokedex_numbers: PokemonSpeciesDexEntry[];

    /**
     * The egg groups to which the Pokémon species belongs.
     */
    egg_groups: NamedLink[];

    /**
     * The color of the Pokémon species.
     */
    color: NamedLink;

    /**
     * The shape of the Pokémon species.
     */
    shape: NamedLink;

    /**
     * The Pokémon species from which this species evolves, if any.
     */
    evolves_from_species: NamedLink;

    /**
     * The evolution chain to which this Pokémon species belongs.
     */
    evolution_chain: Link;

    /**
     * The habitat of the Pokémon species.
     */
    habitat: NamedLink;

    /**
     * The generation in which the Pokémon species was introduced.
     */
    generation: NamedLink;

    /**
     * The localized names of the Pokémon species.
     */
    names: Name[];

    /**
     * The Pal Park encounter areas for the Pokémon species.
     */
    pal_park_encounters: PalParkEncounterArea[];

    /**
     * The flavor text entries for the Pokémon species.
     */
    flavor_text_entries: FlavorText[];

    /**
     * The form descriptions for the Pokémon species.
     */
    form_descriptions: Description[];

    /**
     * The genera of the Pokémon species.
     */
    genera: Genus[];

    /**
     * The varieties of the Pokémon species.
     */
    varieties: PokemonSpeciesVariety[];
}

/**
 * Represents the genus of a Pokémon species in a specific language.
 */
export interface Genus {
    genus: string;
    language: NamedLink; // Language
}

/**
 * Represents a Pokémon species entry in a specific Pokédex.
 *
 * @property entry_number - The unique number assigned to the Pokémon species
 * within the specified Pokédex.
 * @property pokedex - A reference to the Pokédex in which this entry appears.
 */
export interface PokemonSpeciesDexEntry {
    entry_number: number;
    pokedex: NamedLink; // Pokedex
}

/**
 * Represents an encounter area in the Pal Park feature of a Pokémon game.
 * 
 * @property base_score - The base score assigned to the encounter in this area.
 * @property rate - The encounter rate for this area, typically represented as a percentage.
 * @property area - A reference to the specific Pal Park area, represented as a `NamedLink`.
 */
export interface PalParkEncounterArea {
    base_score: number;
    rate: number;
    area: NamedLink; // PalParkArea
}

/**
 * Represents a variety of a Pokémon species.
 * Each species can have multiple varieties, with one being the default.
 */
export interface PokemonSpeciesVariety {
    is_default: boolean;
    pokemon: NamedLink;
}