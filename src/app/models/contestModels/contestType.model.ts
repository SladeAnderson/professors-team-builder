import { NamedLink } from "../core.model";

/**
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 *
 * ## ContestType (type)
 * | Name          | Description                                      | Type            |
 * |---------------|--------------------------------------------------|-----------------|
 * | id            | The unique identifier for the contest type.      | `number`        |
 * | name          | The name of the contest type.                    | `string`        |
 * | berry_flavor  | The berry flavor associated with the contest.    | `NamedLink`     |
 * | names         | A list of localized names for the contest type.  | `contestName[]` |
 */
export interface contestType {
    id: number;
    name: string;
    berry_flavor: NamedLink;
    names: contestName[];
}

/**
 * Represents a localized name for a contest type.
 *
 * ## ContestName (type)
 * | Name     | Description                                      | Type            |
 * |----------|--------------------------------------------------|-----------------|
 * | name     | The name for this contest.                      | `string`        |
 * | color    | The color associated with this contest's name.  | `string`        |
 * | language | The language that this name is in.              | `NamedLink`     |
 */
export interface contestName {
    name: string;
    color: string;
    language: NamedLink;
}