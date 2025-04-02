import { Inject, Injectable } from "@angular/core";
import Dexie, { Table } from 'dexie';
import { namedSummery } from "../models/summery.model";
import { halfPokemon } from "../models/pokemonList.model";

@Injectable({
    providedIn: "root",
})
class LocalDB extends Dexie {
    pokemonSummery!: Dexie.Table<namedSummery, number>;
    halfPokemon!: Dexie.Table<halfPokemon, string>;
    // add Complete Pokemon Table

    constructor(@Inject('DB_NAME') name: string) {
        super(name);
        this.version(1).stores({
            pokemonSummery: 'count',
            halfPokemon: 'name',
            // add Complete Pokemon Table
        })
    }
}

export default LocalDB;