import { Name, NamedLink } from "./core.model";

/**
 * Represents an egg group in the application.
 * Egg groups are used to categorize Pokémon species based on their breeding compatibility.
 */
export interface EggGroup {
    /**
     * The unique identifier for the egg group.
     */
    id: number;

    /**
     * The name of the egg group.
     */
    name: string;

    /**
     * A list of localized names for the egg group.
     */
    names: Name[];

    /**
     * A list of Pokémon species that belong to this egg group.
     */
    pokemon_species: NamedLink[];
}