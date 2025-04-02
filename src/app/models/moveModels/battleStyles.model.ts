import { Name } from "../core.model";

export interface moveBattleStyle {
    /**
     * The Key
     */
    id: number;
    /**
     * The string name
     */
    name:string;
    /**
     * A list of names of this resource in different languages
     */
    Names: Name[]
}