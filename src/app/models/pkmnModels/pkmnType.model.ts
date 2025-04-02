import { NamedLink, Link, Name } from '../core.model';

export interface TypeModel {
    id: number;
    name: string;
    damage_relations: TypeRelations;
    past_damage_relations: TypeRelationsPast[];
    game_indices: GenerationGameIndex[];
    generation: NamedLink;
    move_damage_class: NamedLink;
    names: Name[];
    pokemon: TypePokemon[];
    moves: NamedLink[];
}

export interface TypePokemon {
    slot: number;
    pokemon: NamedLink;
}

export interface TypeRelations {
    no_damage_to: NamedLink[];
    half_damage_to: NamedLink[]; 
    double_damage_to: NamedLink[]; 
    no_damage_from: NamedLink[]; 
    half_damage_from: NamedLink[]; 
    double_damage_from: NamedLink[]; 
}

export interface TypeRelationsPast {
    generation: NamedLink;
    damage_relations: TypeRelations;
}

export interface GenerationGameIndex {
    game_index: number;
    generation: NamedLink;
}