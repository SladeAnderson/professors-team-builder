import { Link, MachineVersionDetail, Name, NamedLink, VerboseEffect } from "../core.model";
import { abilityEffectChange } from "../pkmnModels/ability.model";

/**
 * Represents a Pokémon move with various attributes and metadata.
 * 
 * @property {number} id - The unique identifier for this move.
 * @property {string} name - The name of the move.
 * @property {number | null} accuracy - The percentage chance of the move being successful, or null if not applicable.
 * @property {number} effect_chance - The percentage chance of the move's effect occurring.
 * @property {number} pp - The number of times this move can be used (Power Points).
 * @property {number} priority - The priority of the move, determining its execution order in battle (-8 to 8).
 * @property {number} power - The base power of the move, or 0 if it has no base power.
 * @property {ContestComboSets} contest_combos - Details of contest combos involving this move.
 * @property {NamedLink} contest_type - The type of appeal this move provides in contests.
 * @property {Link} contest_effect - The effect of the move in contests.
 * @property {NamedLink} damage_class - The type of damage this move inflicts (e.g., physical, special).
 * @property {VerboseEffect[]} effect_entries - Descriptions of the move's effects in various languages.
 * @property {abilityEffectChange[]} effect_changes - Historical changes to the move's effects across versions.
 * @property {NamedLink[]} learned_by_pokemon - List of Pokémon that can learn this move.
 * @property {MoveFlavorText[]} flavor_text_entries - Flavor text descriptions of the move in various languages.
 * @property {NamedLink} generation - The generation in which this move was introduced.
 * @property {MachineVersionDetail[]} machines - Machines (e.g., TMs, HMs) that can teach this move.
 * @property {MoveMetaData} meta - Additional metadata about the move.
 * @property {Name[]} names - Localized names of the move in various languages.
 * @property {PastMoveStatValues[]} past_values - Historical changes to the move's stats across versions.
 * @property {MoveStatChange[]} stat_changes - Stats affected by the move and the magnitude of the changes.
 * @property {Link} super_contest_effect - The effect of the move in super contests.
 * @property {NamedLink} target - The type of target affected by the move.
 * @property {NamedLink} type - The elemental type of the move (e.g., Fire, Water).
 */
export interface Move {
    id: number; // The identifier for this resource.
    name: string; // The name for this resource.
    accuracy: number | null; // The percent value of how likely this move is to be successful.
    effect_chance: number; // The percent value of how likely it is this move's effect will happen.
    pp: number; // Power points. The number of times this move can be used.
    priority: number; // A value between -8 and 8. Sets the order in which moves are executed during battle.
    power: number; // The base power of this move with a value of 0 if it does not have a base power.
    contest_combos: ContestComboSets; // A detail of normal and super contest combos that require this move.
    contest_type: NamedLink; // The type of appeal this move gives a Pokémon when used in a contest.
    contest_effect: Link; // The effect the move has when used in a contest.
    damage_class: NamedLink; // The type of damage the move inflicts on the target, e.g. physical.
    effect_entries: VerboseEffect[]; // The effect of this move listed in different languages.
    effect_changes: abilityEffectChange[]; // The list of previous effects this move has had across version groups.
    learned_by_pokemon: NamedLink[]; // List of Pokémon that can learn the move.
    flavor_text_entries: MoveFlavorText[]; // The flavor text of this move listed in different languages.
    generation: NamedLink; // The generation in which this move was introduced.
    machines: MachineVersionDetail[]; // A list of the machines that teach this move.
    meta: MoveMetaData ; // Metadata about this move.
    names: Name[]; // The name of this resource listed in different languages.
    past_values: PastMoveStatValues[]; // A list of move resource value changes across version groups.
    stat_changes: MoveStatChange[]; // A list of stats this move affects and how much it affects them.
    super_contest_effect: Link; // The effect the move has when used in a super contest.
    target: NamedLink; // The type of target that will receive the effects of the attack.
    type: NamedLink; // The elemental type of this move.
}

export interface ContestComboSets {
    normal: ContestComboDetail; // Moves this move can be used before or after in normal contests.
    super: ContestComboDetail; // Moves this move can be used before or after in super contests.
}

export interface ContestComboDetail {
    use_before: NamedLink[]; // A list of moves to use before this move.
    use_after: NamedLink[]; // A list of moves to use after this move.
}

export interface MoveFlavorText {
    flavor_text: string; // The localized flavor text for an API resource in a specific language.
    language: NamedLink; // The language this name is in.
    version_group: NamedLink; // The version group that uses this flavor text.
}

export interface MoveMetaData {
    ailment: NamedLink; // The status ailment this move inflicts on its target.
    category: NamedLink; // The category of move this move falls under, e.g. damage or ailment.
    min_hits: number; // The minimum number of times this move hits. Null if it always hits once.
    max_hits: number; // The maximum number of times this move hits. Null if it always hits once.
    min_turns: number; // The minimum number of turns this move continues to take effect.
    max_turns: number; // The maximum number of turns this move continues to take effect.
    drain: number; // HP drain (if positive) or recoil damage (if negative), in percent of damage done.
    healing: number; // The amount of HP gained by the attacking Pokémon, in percent of its maximum HP.
    crit_rate: number; // Critical hit rate bonus.
    ailment_chance: number; // The likelihood this attack will cause an ailment.
    flinch_chance: number; // The likelihood this attack will cause the target Pokémon to flinch.
    stat_chance: number; // The likelihood this attack will cause a stat change in the target Pokémon.
}

export interface MoveStatChange {
    change: number; // The amount of change.
    stat: NamedLink; // The stat being affected.
}

export interface PastMoveStatValues {
    accuracy: number; // The percent value of how likely this move is to be successful.
    effect_chance: number; // The percent value of how likely it is this move's effect will take effect.
    power: number; // The base power of this move with a value of 0 if it does not have a base power.
    pp: number; // Power points. The number of times this move can be used.
    effect_entries: VerboseEffect[]; // The effect of this move listed in different languages.
    type: NamedLink; // The elemental type of this move.
    version_group: NamedLink; // The version group in which these move stat values were in effect.
}
