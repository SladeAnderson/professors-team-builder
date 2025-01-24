
export interface Link {
    name: string|null,
    url: string|null
}

export interface halfPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: ability[];
    forms: Link[];
    game_indices: game_indice[];
    held_items: held_item[];
    location_area_encounters: string;
    moves: move[];
    species: Link;
    sprites: sprites;
    cries: cries;
    stats: stat[];
    types: type[];
    past_types: past_type[];
}

interface ability {
    is_hidden: boolean;
    slot: number;
    ability: Link;
}

interface game_indice {
    game_index: number;
    version: Link;
}

interface held_item {
    item: Link;
    version_details: version_detail[];
}

interface version_detail {
    rarity: number;
    version: Link;
}

interface move {
    move: Link;
    version_group_details: version_group_detail[];
}

interface version_group_detail {
    level_learned_at: number;
    version_group: Link;
    move_learn_method: Link;
}

interface sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface cries {
    latest: string;
    legacy: string;
}

interface stat {
    base_stat: number;
    effort: number;
    stat: Link;
}

interface type {
    slot: number;
    type: Link;
}

interface past_type {
    generation: Link;
    types: type[]
}