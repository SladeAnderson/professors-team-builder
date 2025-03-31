import { Link, NamedLink, Name } from "../core.model";

export interface pkmnStats {
    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: MoveStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: Link[]; // Replacing APIResource
    move_damage_class: NamedLink; // Replacing NamedAPIResource
    names: Name[];
}

export interface MoveStatAffectSets {
    increase: MoveStatAffect[];
    decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
    change: number;
    move: NamedLink; // Replacing NamedAPIResource
}

export interface NatureStatAffectSets {
    increase: NamedLink[]; // Replacing NamedAPIResource
    decrease: NamedLink[]; // Replacing NamedAPIResource
}
