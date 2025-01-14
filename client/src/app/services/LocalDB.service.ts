import { Injectable } from "@angular/core";
import Dexie, { Table } from 'dexie';
import { pokemonSummery } from "../models/pokemonSummery.model";
import { halfPokemon } from "../models/pokemonList.model";

class LocalDB extends Dexie {
    pokemonSummery!: Dexie.Table<pokemonSummery, number>;
    halfPokemon!: Dexie.Table<halfPokemon, string>;
    // add Complete Pokemon Table

    constructor(name: string) {
        super(name);
        this.version(1).stores({
            pokemonSummery: 'count',
            halfPokemon: 'name',
            // add Complete Pokemon Table
        })
    }
}

export default LocalDB;