export interface teamMember {
    // The unique identifier for the pokemon,
    id: string;
    // The name of the pokemon,
    name: string;
    // The sprite of the pokemon,
    sprite: string;
    // The details of the pokemon,
    details: pkmnDetails;
}

export interface pkmnDetails {
    types: string[];

    moves: number[];

    roles: string[];

    abilities: string[];

    stats: Record<string, number>;

    weaknesses: string[];
    resistances: string[];
    immunities: string[];

    matchupChart: Record<string, number>;
}

export interface pkmnTeam {
    id: string;
    name: string;

    pokemon: teamMember[];
}