import { Name, NamedLink } from "../core.model";


/**
 * ## Version (type)
 * 
 * | Name           | Description                                           | Type                          |
 * |----------------|-------------------------------------------------------|-------------------------------|
 * | `id`           | The identifier for this resource.                    | `integer`                     |
 * | `name`         | The name for this resource.                          | `string`                      |
 * | `names`        | The name of this resource listed in different languages. | `list Name`                |
 * | `version_group`| The version group this version belongs to.           | `NamedAPIResource (VersionGroup)` |
 */
export interface Version {
    id: number;
    name: string;
    names: Name[];
    version_group: NamedLink;
}