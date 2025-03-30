import { NamedLink } from "./core.model";

export interface pokemonSummery {
    count: number;
    next: string|null;
    previous: string|null;
    results: NamedLink[];
}

