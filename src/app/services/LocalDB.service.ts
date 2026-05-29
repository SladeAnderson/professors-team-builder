import { Inject, Injectable } from "@angular/core";
import Dexie, { Table } from 'dexie';
import { namedSummery } from "../models/summery.model";
import { halfPokemon } from "../models/pokemonList.model";
import { TypeModel } from "../models/pkmnModels/pkmnType.model";

@Injectable({
    providedIn: "root",
})
class LocalDB extends Dexie {
    pokemonSummery!: Dexie.Table<namedSummery, number>;
    halfPokemon!: Dexie.Table<halfPokemon, string>;
    types!: Dexie.Table<TypeModel, number>;
    // add Complete Pokemon Table

    constructor(@Inject('DB_NAME') name: string) {
        super(name);
        this.version(1).stores({
            pokemonSummery: 'count',
            halfPokemon: 'name',
            types: 'id',
            // add Complete Pokemon Table
        })
    }
}

export default LocalDB;