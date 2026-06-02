export interface MetaProfile {
    id: string;
    name: string;

    requirements: MetaEntry[];
}

export interface MetaEntry {
    id: number;
    name: string;

    weight: number;

    conditions: MetaCondition[];

    tags: string[]; 

    notes?: string;
}

export interface MetaCondition {
    type: MetaType;
    id: number;
    displayName?: string;
    archetype: Archetype;
    score: number;
}

export enum MetaType {
    "pokemon",
    "move",
    "item",
    "ability"
}

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