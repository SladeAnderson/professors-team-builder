import {
    TypeModel,
    TypeRelations
} from "../../models/pkmnModels/pkmnType.model";

export type MatchupChart = Record<string, number>;

export interface PokemonMatchups {

    chart: MatchupChart;

    weaknesses: string[];

    resistances: string[];

    immunities: string[];

    quadWeaknesses: string[];

    quadResistances: string[];

    neutral: string[];
}

export const ALL_TYPES = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
];

/**
 * Creates a neutral matchup chart
 */
export function createMatchupChart(): MatchupChart {

    return ALL_TYPES.reduce((chart, type) => {

        chart[type] = 1;

        return chart;

    }, {} as MatchupChart);
}

/**
 * Applies one type's defensive modifiers
 */
export function applyTypeRelations(
    chart: MatchupChart,
    relations: TypeRelations
): void {

    // Weaknesses
    for (const type of relations.double_damage_from) {

        chart[type.name] *= 2;
    }

    // Resistances
    for (const type of relations.half_damage_from) {

        chart[type.name] *= 0.5;
    }

    // Immunities
    for (const type of relations.no_damage_from) {

        chart[type.name] *= 0;
    }
}

/**
 * Builds the defensive matchup chart
 */
export function buildDefensiveMatchupChart(
    defendingTypes: TypeModel[]
): MatchupChart {

    const chart = createMatchupChart();

    for (const type of defendingTypes) {

        applyTypeRelations(
            chart,
            type.damage_relations
        );
    }

    return chart;
}

/**
 * Categorizes matchup values
 */
export function categorizeMatchups(
    chart: MatchupChart
): PokemonMatchups {

    const weaknesses: string[] = [];

    const resistances: string[] = [];

    const immunities: string[] = [];

    const quadWeaknesses: string[] = [];

    const quadResistances: string[] = [];

    const neutral: string[] = [];

    for (const type of ALL_TYPES) {

        const multiplier = chart[type];

        if (multiplier === 0) {

            immunities.push(type);
        }

        else if (multiplier >= 4) {

            quadWeaknesses.push(type);

            weaknesses.push(type);
        }

        else if (multiplier > 1) {

            weaknesses.push(type);
        }

        else if (multiplier <= 0.25) {

            quadResistances.push(type);

            resistances.push(type);
        }

        else if (multiplier < 1) {

            resistances.push(type);
        }

        else {

            neutral.push(type);
        }
    }

    return {
        chart,

        weaknesses,

        resistances,

        immunities,

        quadWeaknesses,

        quadResistances,

        neutral
    };
}

/**
 * Full helper
 */
export function getPokemonDefensiveMatchups(
    types: TypeModel[]
): PokemonMatchups {

    const chart = buildDefensiveMatchupChart(
        types
    );

    return categorizeMatchups(chart);
}