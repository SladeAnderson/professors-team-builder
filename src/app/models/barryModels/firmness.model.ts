import { Name, NamedLink } from "../core.model";

/**
 * ## BerryFirmness (type)
 * | Name     | Description                                   | Type                          |
 * |----------|-----------------------------------------------|-------------------------------|
 * | `id`     | The identifier for this resource.            | `integer`                    |
 * | `name`   | The name for this resource.                  | `string`                     |
 * | `berries`| A list of the berries with this firmness.    | `list NamedAPIResource (Berry)` |
 * | `names`  | The name of this resource listed in different languages. | `list Name` |
 */
export interface barryFirmness {
    id: number;
    name: string;
    berries: NamedLink;
    names: Name[];
}