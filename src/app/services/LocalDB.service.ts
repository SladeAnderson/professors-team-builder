import { Injectable } from "@angular/core";
import Dexie, { Table } from 'dexie';
import { pokemonSummery } from "../models/pokemonSummery.model";
import { halfPokemon } from "../models/pokemonList.model";

class LocalDB extends Dexie {
    pokemonSummery!: Dexie.Table<pokemonSummery, 'name'>;
    halfPokemon!: Dexie.Table<halfPokemon, 'name'>;

    constructor(name: string) {
        super(name);
        this.version(4).stores({
            pokemonSummery: 'name',
            halfPokemon: 'name',
        })

    }
}

export default LocalDB;