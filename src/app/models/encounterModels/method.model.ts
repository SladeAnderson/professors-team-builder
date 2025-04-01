import { Name } from "../core.model";


/**
 * ## EncounterMethod (type)
 * 
 * | Name   | Description                                         | Type         |
 * |--------|-----------------------------------------------------|--------------|
 * | `id`     | The identifier for this resource.                  | `integer`    |
 * | `name`   | The name for this resource.                        | `string`     |
 * | `order`  | A good value for sorting.                          | `integer`    |
 * | `names`  | The name of this resource listed in different languages. | `Name[]`    |
 */
export interface EncounterMethod {
    id: number;
    name: string;
    order: number;
    names: Name[];
}