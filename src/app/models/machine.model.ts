import { NamedLink } from "./core.model";

/**
 * Represents a Machine, Machines are the representation of items that teach moves to Pokémon. 
 * They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 */
export interface machine {
    /**
     * The unique identifier for the machine.
     */
    id: number;

    /**
     * The item associated with the machine.
     */
    item: NamedLink;

    /**
     * The move associated with the machine.
     */
    move: NamedLink;

    /**
     * The version group in which the machine is available.
     */
    version_group: NamedLink;
}