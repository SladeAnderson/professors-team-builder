import { Name, NamedLink } from "../core.model";

/**
 * ## EncounterConditionValue
 * | Name       | Description                                              | Type                              |
 * |------------|----------------------------------------------------------|-----------------------------------|
 * | `id`       | The identifier for this resource.                        | `integer`                        |
 * | `name`     | The name for this resource.                              | `string`                         |
 * | `condition`| The condition this encounter condition value pertains to.| `NamedLink` (EncounterCondition) |
 * | `names`    | The name of this resource listed in different languages. | `list Name`                      |
 */
export interface EncounterConditionValue {
    id: number;
    name: string;
    condition: NamedLink;
    names: Name[];
}