import { NamedLink } from "../core.model";

/**
 * ## Berry (type)
 * 
 * | Name                 | Description                                                                                     | Type                          |
 * |----------------------|-------------------------------------------------------------------------------------------------|-------------------------------|
 * | `id`                | The identifier for this resource.                                                              | `integer`                    |
 * | `name`              | The name for this resource.                                                                    | `string`                     |
 * | `growth_time`       | Time it takes the tree to grow one stage, in hours. Berry trees go through four growth stages.  | `integer`                    |
 * | `max_harvest`       | The maximum number of these berries that can grow on one tree in Generation IV.                | `integer`                    |
 * | `natural_gift_power`| The power of the move "Natural Gift" when used with this Berry.                                 | `integer`                    |
 * | `size`              | The size of this Berry, in millimeters.                                                        | `integer`                    |
 * | `smoothness`        | The smoothness of this Berry, used in making Pokéblocks or Poffins.                            | `integer`                    |
 * | `soil_dryness`      | The speed at which this Berry dries out the soil as it grows. Higher rate means faster drying. | `integer`                    |
 * | `firmness`          | The firmness of this berry, used in making Pokéblocks or Poffins.                              | `NamedAPIResource (BerryFirmness)` |
 * | `flavors`           | A list of references to each flavor a berry can have and the potency of each flavor.           | `list BerryFlavorMap`        |
 * | `item`              | Berries are actually items. This is a reference to the item-specific data for this berry.      | `NamedAPIResource (Item)`    |
 * | `natural_gift_type` | The type inherited by "Natural Gift" when used with this Berry.                                | `NamedAPIResource (Type)`    |
 */
export interface barry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: NamedLink;
    flavors: barryFlavorMap[];
    item: NamedLink;
    natural_gift_type: NamedLink;
}

/**
 * ## BerryFlavorMap (type)
 * 
 * | Name     | Description                                           | Type                          |
 * |----------|-------------------------------------------------------|-------------------------------|
 * | `potency`| How powerful the referenced flavor is for this berry.| `integer`                    |
 * | `flavor` | The referenced berry flavor.                         | `NamedAPIResource (BerryFlavor)` |
 */
export interface barryFlavorMap {
    potency: number;
    flavor: NamedLink;
}