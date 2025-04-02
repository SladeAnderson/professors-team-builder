import { Description, NamedLink } from "../core.model";

/**
 * Represents a characteristic of an entity with specific attributes.
 */
export interface characteristic {
    /**
     * The unique identifier for the characteristic.
     */
    id: number;

    /**
     * A numerical value used for gene-related calculations or categorization.
     */
    gene_modulo: number;

    /**
     * An array of possible numerical values associated with the characteristic.
     */
    possible_values: number[];

    /**
     * The highest stat associated with the characteristic, represented as a named link.
     */
    highest_stat: NamedLink;

    /**
     * An array of descriptions providing additional details about the characteristic.
     */
    descriptions: Description[];
}