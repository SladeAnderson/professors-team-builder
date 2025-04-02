import { Description, Name, NamedLink } from "../core.model";

/**
 * ## ItemAttribute (type)
 *
 * | Name         | Description                                              | Type                        |
 * |--------------|----------------------------------------------------------|-----------------------------|
 * | `id`         | The identifier for this resource.                        | `number`                    |
 * | `name`       | The name for this resource.                              | `string`                    |
 * | `items`      | A list of items that have this attribute.                | `NamedLink[]`               |
 * | `names`      | The name of this item attribute listed in different languages. | `Name[]`                |
 * | `descriptions` | The description of this item attribute listed in different languages. | `Description[]` |
 */
export interface ItemAttribute {
    id: number;
    name: string;
    items: NamedLink[];
    names: Name[];
    descriptions: Description[];
}