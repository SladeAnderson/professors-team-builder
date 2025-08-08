import { halfPokemon } from "./pokemonList.model";


export interface team {
    id: number;
    name: string;
    game: string;
    pkmnTeam: halfPokemon[];
}