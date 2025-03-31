import { Name, NamedLink } from "./core.model";
import { type } from "./pokemonList.model";

/**
 * Represents a Pokémon form with detailed information.
 *
 * @interface pkmnForm
 * @property {number} id - The unique identifier for the Pokémon form.
 * @property {string} name - The name of the Pokémon form.
 * @property {number} order - The order of the Pokémon form in the Pokémon species list.
 * @property {number} form_order - The order of the form within its species.
 * @property {boolean} is_default - Indicates if this form is the default form for the Pokémon.
 * @property {boolean} is_battle_only - Indicates if this form is only available during battle.
 * @property {boolean} is_mega - Indicates if this form is a Mega Evolution.
 * @property {string} form_name - The name of the form (e.g., "Mega", "Alolan").
 * @property {NamedLink} pokemon - A reference to the base Pokémon associated with this form.
 * @property {type[]} types - The types associated with this Pokémon form.
 * @property {pkmnFormSprites} sprites - The sprites representing this Pokémon form.
 * @property {NamedLink} version_group - The version group in which this form is available.
 * @property {Name[]} names - The localized names of this Pokémon form.
 * @property {Name[]} form_names - The localized names specific to this form.
 */
export interface pkmnForm {
    id: number;
    name: string;
    order: number;
    form_order: number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: NamedLink;
    types: type[];
    sprites: pkmnFormSprites;
    version_group: NamedLink;
    names: Name[];
    form_names: Name[];
}

/**
 * Represents the sprite images for a Pokémon form.
 * 
 * @property {string} front_default - The URL of the default front-facing sprite.
 * @property {string} front_shiny - The URL of the shiny front-facing sprite.
 * @property {string} back_default - The URL of the default back-facing sprite.
 * @property {string} back_shiny - The URL of the shiny back-facing sprite.
 */
export interface pkmnFormSprites {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
}