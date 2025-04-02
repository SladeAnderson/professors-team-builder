import { Name, NamedLink } from "../core.model";

/**
 * ## BerryFlavor (type)
 * 
 * | Name          | Description                                           | Type                        |
 * |---------------|-------------------------------------------------------|-----------------------------|
 * | `id`          | The identifier for this resource.                    | `integer`                  |
 * | `name`        | The name for this resource.                          | `string`                   |
 * | `berries`     | A list of the berries with this flavor.              | `list FlavorBerryMap`      |
 * | `contest_type`| The contest type that correlates with this berry flavor. | `NamedAPIResource (ContestType)` |
 * | `names`       | The name of this resource listed in different languages. | `list Name`               |
 */
export interface barryFlavor {
    id: number;
    name: string;
    berries: flavorBarryMap[];
    contest_type: NamedLink;
    names: Name[];
}

/**
 * ## FlavorBerryMap (type)
 * 
 * | Name    | Description                                      | Type                        |
 * |---------|--------------------------------------------------|-----------------------------|
 * | `potency` | How powerful the referenced flavor is for this berry. | `integer`                  |
 * | `berry`   | The berry with the referenced flavor.          | `NamedAPIResource (Berry)` |
 */
export interface flavorBarryMap {
    potency: number;
    berry: NamedLink
}