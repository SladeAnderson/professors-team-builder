import { NamedLink, VersionEncounterDetail } from "../core.model";

/**
 * Represents a Pokémon location area, including details about the location
 * and the version-specific encounter details.
 */
export interface pkmnLocationArea {
    /**
     * The location area where the Pokémon can be found.
     */
    location_area: NamedLink;

    /**
     * An array of version-specific encounter details for the Pokémon in this location area.
     */
    verstion_details: VersionEncounterDetail[];
}