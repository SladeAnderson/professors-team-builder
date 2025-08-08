import { Inject, Injectable } from "@angular/core";
import Dexie, { Table } from 'dexie';
import { namedSummery } from "../models/summery.model";
import { halfPokemon } from "../models/pokemonList.model";
import { team } from "../models/team.model";

@Injectable({
    providedIn: "root",
})
class LocalDB extends Dexie {
    pokemonSummery!: Dexie.Table<namedSummery, number>;
    halfPokemon!: Dexie.Table<halfPokemon, string>;
    userTeams!: Dexie.Table<team, string>;

    constructor(@Inject('DB_NAME') name: string) {
        super(name);
        this.version(1).stores({
            pokemonSummery: 'count',
            halfPokemon: 'name',
            userTeams: 'name',
        })
    }
}

export default LocalDB;