import { Link } from "./pokemonList.model";

export interface pokemonSummery {
    count: number;
    next: string;
    previous: string;
    results: Link[];
}

