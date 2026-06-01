export interface threatProfile {
    id: string;
    name: string;
    threats: threatMember[];
}

interface threatMember {
    pokemonId: number;
    priority: number;
    notes?: string;
}