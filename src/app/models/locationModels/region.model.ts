import { Name, NamedLink } from "../core.model";

/**
 * Represents a Pokémon region with its associated data.
 *
 * @interface Region
 * 
 * @property {number} id - The unique identifier for this region.
 * @property {string} name - The name of the region.
 * @property {NamedLink[]} locations - A list of locations that can be found in this region.
 * @property {Name[]} names - The localized names of the region in different languages.
 * @property {NamedLink} main_generation - The generation in which this region was introduced.
 * @property {NamedLink[]} pokedexes - A list of Pokédexes cataloging Pokémon in this region.
 * @property {NamedLink[]} version_groups - A list of version groups where this region can be visited.
 */
export interface Region {
    id: number;
    name: string;
    locations: NamedLink[];
    names: Name[];
    main_generation: NamedLink;
    pokedexes: NamedLink[];
    version_groups: NamedLink[];
}