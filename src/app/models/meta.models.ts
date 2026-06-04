/**
 * @param id The unique identifier for the meta profile
 * @param name The name of the meta profile
 * 
 * @param requirements  An array of meta entries that define the requirements for this meta profile. 
 * 
 * @description
 * The MetaProfile interface represents a competitive meta profile for Pokémon battles.
 */
export interface MetaProfile {
    /**
     * The unique identifier for the meta profile
     */
    id: string;

    /**
     * The name of the meta profile
     */
    name: string;

    /**
     * An array of meta entries that define the requirements for this meta profile. Each entry represents a specific condition or factor that contributes to the overall meta profile, such as the presence of certain Pokémon, moves, items, or abilities.
     */
    requirements: MetaEntry[];
}

/**
 * @param id The unique identifier for the meta entry
 * @param name The name of the meta entry
 * @param weight The weight or importance of this entry in the overall meta profile
 * @param conditions An array of conditions that contribute to this meta entry
 * @param tags An array of tags associated with this meta entry for categorization and filtering
 * @param notes Optional notes providing additional context or information about this meta entry
 * 
 * @description
 * Each entry represents a specific condition or factor that contributes to the overall meta profile, such as the presence of certain Pokémon, moves, items, or abilities.
 */
export interface MetaEntry {
    /**
     * The unique identifier for the meta entry
     */
    id: string;
    /**
     * The name of the meta entry
     */
    name: string;

    /**
     * The weight or importance of this entry in the overall meta profile. A higher weight indicates a greater impact on the meta profile, while a lower weight indicates a lesser impact. This allows for prioritization of certain conditions over others when analyzing the competitive landscape.
     */
    weight: number;

    /**
     * An array of conditions that contribute to this meta entry. Each condition represents a specific factor (such as a Pokémon, move, item, or ability) that has an impact on the meta profile. The conditions are evaluated based on their relevance and impact, which is reflected in their associated scores.
     */
    conditions: MetaCondition[];

    /**
     * An array of tags associated with this meta entry for categorization and filtering
    tags: string[]; 

    /**
     * Optional notes providing additional context or information about this meta entry.
     */
    notes?: string;
}

/**
 * @param type The type of condition (e.g., Pokémon, move, item, or ability)
 * @param id The ID of the condition (e.g., Pokémon ID, move ID, item ID, or ability ID)
 * @param displayName Optional display name for the condition
 * @param archetypes The archetypes that this condition is relevant to
 * @param score A score representing the impact of this condition on the meta profile
 * 
 * @description
 * The MetaCondition interface represents a specific condition that contributes to the meta profile. 
 */
export interface MetaCondition {
    /**
     * The type of condition (e.g., Pokémon, move, item, or ability)
     */
    type: MetaType;
    
    /**
     * The ID of the condition (e.g., Pokémon ID, move ID, item ID, or ability ID)
     */
    id: number;

    /**
     * Optional display name for the condition
     */
    displayName?: string; 

    /**
     * The archetypes that this condition is relevant to
     */
    archetypes: Archetype[];

    /**
     * A score representing the impact of this condition on the meta profile
     */
    score: number;
}

/**
 * @description
 * The MetaType enum represents the different types of conditions that can contribute to a meta profile.
 */
export enum MetaType {
    "pokemon",
    "move",
    "item",
    "ability"
}

/**
 * @description
 * The Archetype enum represents the various competitive archetypes that conditions can be relevant to.
 */
export enum Archetype {
    "HyperOffense",
    "BulkyOffense",
    "Balance",
    "SemiStall",
    "Stall",
    "Weather",
    "TrickRoom",
    "Screens",
    "VoltTurn",
    "HazardStack"
}