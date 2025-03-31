import { Description, NamedLink } from "./core.model";

/**
 * Represents the growth rate of a Pokémon species.
 * 
 * @interface GrowthRate
 * 
 * @property {number} id - The unique identifier for the growth rate.
 * @property {string} name - The name of the growth rate.
 * @property {string} formula - The formula used to calculate experience points for this growth rate.
 * @property {Description[]} descriptions - A list of localized descriptions for the growth rate.
 * @property {GrowthRateExperienceLevel[]} levels - A list of experience levels associated with this growth rate.
 * @property {NamedLink[]} pokemon_species - A list of Pokémon species that follow this growth rate.
 */
export interface GrowthRate {
    id: number;
    name: string;
    formula: string;
    descriptions: Description[];
    levels: GrowthRateExperienceLevel[];
    pokemon_species: NamedLink[];
}

/**
 * Represents the experience required to reach a specific growth rate level.
 */
export interface GrowthRateExperienceLevel {
    level: number;
    experience: number;
}
