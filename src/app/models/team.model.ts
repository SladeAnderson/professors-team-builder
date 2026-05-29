export interface teamMember {
    // The unique identifier for the team member,
    id: string;
    // The name of the team member,
    name: string;
    // The sprite of the team member,
    sprite: string;
}

export interface pkmnDetails {
    // The unique identifier for the pokemon,
    id: number;
    types: string[];

    weaknesses: string[];
    resistances: string[];
    immunities: string[];

    matchupChart: Record<string, number>;
}