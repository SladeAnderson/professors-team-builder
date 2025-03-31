import { NamedLink } from "../core.model";

/**
 * Represents a gender entity with associated details.
 */
export interface Gender {
    /**
     * The unique identifier for the gender.
     */
    id: number;

    /**
     * The name of the gender.
     */
    name: string;

    /**
     * A list of Pokémon species details associated with this gender.
     */
    pkmn_species_details: PkmnSpeciesGender[];

    /**
     * A link to a resource required for evolution related to this gender.
     */
    required_for_evolution: NamedLink;
}

/**
 * Represents the gender distribution of a Pokémon species.
 *
 * @property rate - The gender rate of the Pokémon species. A value of -1 indicates a genderless species.
 * @property pokemon_species - A reference to the Pokémon species, represented as a `NamedLink`.
 */
export interface PkmnSpeciesGender {
    /**
     * The gender rate of the Pokémon species. A value of -1 indicates a genderless species.
     */
    rate: number;
    /**
     * A reference to the Pokémon species, represented as a `NamedLink`.
     */
    pokemon_species: NamedLink;
}