export interface NamedLink{
    name: string,
    url: string
}

export interface Link {
    url: string
}

export interface Language {
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: string[];
}

export interface Description {
    description: string;
    language: NamedLink; // Language
}

export interface Effect {
    effect: string;
    language: NamedLink; // Language
}

export interface Encounter {
    min_level: number;
    max_level: number;
    condition_values: NamedLink[]; // EncounterConditionValue
    chance: number;
    method: NamedLink; // EncounterMethod
}

export interface FlavorText {
    flavor_text: string;
    language: NamedLink; // Language
    version: NamedLink; // Version
}

export interface GenerationGameIndex {
    game_index: number;
    generation: NamedLink; // Generation
}

export interface MachineVersionDetail {
    machine: Link; // Machine
    version: NamedLink; // Version Group
}

export interface Name {
    name: string;
    language: NamedLink; // Language
}

export interface VerboseEffect {
    effect: string;
    short_effect: string;
    language: NamedLink; // Language
}

export interface VersionEncounterDetail {
    version: NamedLink; // Version
    max_chance: number;
    encounter_details: Encounter[];
}

export interface VersionGameIndex {
    game_index: number;
    version: NamedLink; // Version
}

export interface VersionGroupFlavorText {
    text: string;
    language: NamedLink; // Language
    version_group: NamedLink; // Version Group
}