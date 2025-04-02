import { Name, NamedLink } from "../core.model";

/**
 * ## EvolutionTrigger (type)
 *
 * | Name             | Description                                                   | Type                          |
 * |------------------|---------------------------------------------------------------|-------------------------------|
 * | `id`             | The identifier for this resource.                             | `number`                      |
 * | `name`           | The name for this resource.                                   | `string`                      |
 * | `names`          | The name of this resource listed in different languages.      | `Name[]`                      |
 * | `pokemon_species`| A list of Pokémon species that result from this evolution trigger. | `NamedLink[]` (PokemonSpecies) |
 */
export interface EvolutionTrigger {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedLink[];
}