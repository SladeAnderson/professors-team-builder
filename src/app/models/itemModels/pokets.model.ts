import { Name, NamedLink } from "../core.model";

/**
 * ## ItemPocket (type)
 * 
 * | Name       | Description                                                   | Type                              |
 * |------------|---------------------------------------------------------------|-----------------------------------|
 * | `id`       | The identifier for this resource.                             | `number`                          |
 * | `name`     | The name for this resource.                                   | `string`                          |
 * | `categories` | A list of item categories that are relevant to this item pocket. | `NamedLink[]`                |
 * | `names`    | The name of this resource listed in different languages.      | `Name[]`                          |
 */
export interface itemPocket {
    id:number;
    name: string;
    categories: NamedLink[];
    names: Name[];
}
