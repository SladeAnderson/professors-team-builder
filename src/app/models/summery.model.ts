import { Link, NamedLink } from "./core.model";

/**
 * ## namedSummary
 * 
 * | Name      | Description                                      | Type                  |
 * |-----------|--------------------------------------------------|-----------------------|
 * | `count`   | The total number of resources available from this API. | `number`              |
 * | `next`    | The URL for the next page in the list.           | `string`              |
 * | `previous`| The URL for the previous page in the list.       | `string`              |
 * | `results` | A list of named API resources.                  | `NamedLink[]`         |
 */
export interface namedSummery {
    count: number;
    next: string;
    previous: string;
    results: NamedLink[];
}

/**
 * ## summary (type)
 * 
 * | Name      | Description                                      | Type                  |
 * |-----------|--------------------------------------------------|-----------------------|
 * | `count`   | The total number of resources available from this API. | `number`              |
 * | `next`    | The URL for the next page in the list.           | `string`              |
 * | `previous`| The URL for the previous page in the list.       | `string`              |
 * | `results` | A list of unnamed API resources.                | `Link[]`              |
 */
export interface summery {
    count: number;
    next: string;
    previous: string;
    results: Link[];
}