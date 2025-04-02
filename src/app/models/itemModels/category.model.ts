/**
 * ## ItemCategory (type)
 * 
 * | Name   | Description                                              | Type                          |
 * |--------|----------------------------------------------------------|-------------------------------|
 * | `id`   | The identifier for this resource.                        | `number`                      |
 * | `name` | The name for this resource.                              | `string`                      |
 * | `items`| A list of items that are a part of this category.         | `NamedLink[]`                   |
 * | `names`| The name of this item category listed in different languages. | `Name[]`                      |
 * | `pocket`| The pocket items in this category would be put in.       | `NamedLink`                   |
 */
import { Name, NamedLink } from "../core.model";


export interface ItemCategory {
    id: number;

    name: string;

    items: NamedLink[];

    names: Name[];

    pocket: NamedLink;
}
