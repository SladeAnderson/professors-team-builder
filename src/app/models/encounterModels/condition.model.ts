import { Name, NamedLink } from "../core.model";

/**
 * ## EncounterCondition (type)
 * 
 * | Name   | Description                                             | Type                                   |
 * |--------|---------------------------------------------------------|----------------------------------------|
 * | `id`     | The identifier for this resource.                       | `integer`                                |
 * | `name`   | The name for this resource.                             | `string`                                 |
 * | `names`  | The name of this resource listed in different languages.| `list Name`                              |
 * | `values` | A list of possible values for this encounter condition. | `list NamedAPIResource (EncounterConditionValue)` |
 */
export interface EncounterCondition {
	id: number;
	name: string;
	names: Name[];
	values: NamedLink;	
}