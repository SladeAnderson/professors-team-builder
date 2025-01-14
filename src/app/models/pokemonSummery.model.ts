import { Link } from "./pokemonList.model";

export interface pokemonSummery {
    count: number;
    next: string|null;
    previous: string|null;
    results: Link[];
}

