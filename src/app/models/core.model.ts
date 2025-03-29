/**
 * Represents a named hyperlink with a display name and a URL.
 */
export interface NamedLink{
    name: string,
    url: string
}

/**
 * Represents a hyperlink with a URL.
 */
export interface Link {
    url: string
}

/**
 * Represents a language with its associated metadata.
 */
export interface Language {
    /**
     * The unique identifier for the language.
     */
    id: number;

    /**
     * The name of the language.
     */
    name: string;

    /**
     * Indicates whether the language is official.
     */
    official: boolean;

    /**
     * The ISO 639 code for the language.
     */
    iso639: string;

    /**
     * The ISO 3166 code for the language.
     */
    iso3166: string;

    /**
     * A list of alternative names for the language.
     */
    names: string[];
}

/**
 * Represents a description with its associated language.
 */
export interface Description {
    description: string;
    language: NamedLink; // Language
}

/**
 * Represents an effect with its description and associated language.
 */
export interface Effect {
    effect: string;
    language: NamedLink;
}

/**
 * Represents an encounter in the application.
 * 
 * @property min_level - The minimum level at which the encounter can occur.
 * @property max_level - The maximum level at which the encounter can occur.
 * @property condition_values - An array of condition values associated with the encounter, represented as `NamedLink` objects.
 * @property chance - The probability (in percentage) of the encounter occurring.
 * @property method - The method by which the encounter occurs, represented as a `NamedLink` object.
 */
export interface Encounter {
    /**
    * The minimum level at which the encounter can occur.
    */
    min_level: number;
    /**
    * The maximum level at which the encounter can occur.
    */
    max_level: number;
    /**
    * An array of condition values associated with the encounter.
    */
    condition_values: NamedLink[]; // EncounterConditionValue
    /**
    * The probability (in percentage) of the encounter occurring.
    */
    chance: number;
    /**
    * The method by which the encounter occurs.
    */
    method: NamedLink; // EncounterMethod
}

/**
 * Represents a flavor text entry, typically used for descriptive or narrative text.
 * 
 * @property flavor_text - The actual flavor text content.
 * @property language - The language in which the flavor text is written, represented as a `NamedLink`.
 * @property version - The version or context associated with the flavor text, represented as a `NamedLink`.
 */
export interface FlavorText {
    /**
    * The actual flavor text content.
    */
    flavor_text: string;
    /**
    * The language in which the flavor text is written.
    */
    language: NamedLink;
    /**
    * The version or context associated with the flavor text.
    */
    version: NamedLink; 
}

/**
 * Represents the index of a game within a specific generation.
 * 
 * @property game_index - The internal index of the game within the generation.
 * @property generation - A reference to the generation, represented as a named link.
 */
export interface GenerationGameIndex {
    /**
    * The internal index of the game within the generation.
    */
    game_index: number;
    /**
    * A reference to the generation.
    */
    generation: NamedLink;
}

/**
 * Represents the details of a machine version, including the machine itself
 * and the version group it belongs to.
 */
export interface MachineVersionDetail {
    /**
    * The machine associated with this version detail.
    */
    machine: Link; 
    /**
    * The version group associated with this machine.
    */
    version: NamedLink; 
}

/**
 * Represents a name object with a specific language.
 */
export interface Name {
    name: string;
    language: NamedLink; // Language
}

/**
 * Represents a detailed effect description with its corresponding language.
 */
export interface VerboseEffect {
    effect: string;
    short_effect: string;
    language: NamedLink; // Language
}

/**
 * Represents a version encounter detail, including the version, maximum chance,
 * and a list of encounters associated with that version.
 */
export interface VersionEncounterDetail {
    /**
     * The version of the game in which the encounter occurs.
     */
    version: NamedLink;
    /**
    * The maximum chance of encountering the Pokémon in this version.
    */
    max_chance: number;
    /**
     * A list of encounter details associated with this version.
     */
    encounter_details: Encounter[];
}


/**
 * Represents the index of a game within a specific version group.
 */
export interface VersionGameIndex {
    /**
     * The internal index of the game within the version group.
     */
    game_index: number;

    /**
     * The version group associated with this index.
     */
    version: NamedLink;
}

/**
 * Represents the flavor text for a specific version group in a particular language.
 * This is typically used to provide localized descriptions or information.
 */
export interface VersionGroupFlavorText {
    /**
    * The flavor text content.
    */
    text: string;
    /**
    * The language in which the flavor text is written.
    */
    language: NamedLink; // Language
    /**
     * The version group associated with this flavor text.
     */
    version_group: NamedLink; // Version Group
}