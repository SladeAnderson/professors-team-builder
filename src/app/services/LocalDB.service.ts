import { Inject, Injectable } from "@angular/core";
import Dexie, { Table } from 'dexie';
import { namedSummery } from "../models/summery.model";
import { halfPokemon } from "../models/pokemonList.model";

@Injectable({
    providedIn: "root",
})
class LocalDB extends Dexie {
    // ---------------| summaries |--------------- \\

    // barries
    barrieSummary!: Dexie.Table<namedSummery, number>;
    barryFirmnessSum!: Dexie.Table<namedSummery, number>;
    barryFlovorSum!: Dexie.Table<namedSummery, number>;
    
    // contests
    contestTypeSummary!: Dexie.Table<namedSummery, number>;
    contestEffectSummary!: Dexie.Table<namedSummery, number>;
    contestSuperEffectSum!: Dexie.Table<namedSummery, number>;
    
    // encounters
    encounterMethodSum!: Dexie.Table<namedSummery, number>;
    

    // evolution
    evolutionSummary!: Dexie.Table<namedSummery, number>;
    gameSummary!: Dexie.Table<namedSummery, number>;
    itemSummary!: Dexie.Table<namedSummery, number>;
    locationSummary!: Dexie.Table<namedSummery, number>;
    machineSummary!: Dexie.Table<namedSummery, number>;
    moveSummary!: Dexie.Table<namedSummery, number>;
    pokemonSummery!: Dexie.Table<namedSummery, number>;
    abilitieSummary!: Dexie.Table<namedSummery, number>;
    characteristicSummary!: Dexie.Table<namedSummery, number>;
    EggGroupSummary!: Dexie.Table<namedSummery, number>;
    genderSummary!: Dexie.Table<namedSummery, number>;
    growthRateSumamry!: Dexie.Table<namedSummery, number>;
    natureSummary!: Dexie.Table<namedSummery, number>;
    pokeathlonStatSummary!: Dexie.Table<namedSummery, number>;
    locationAreaSummary!: Dexie.Table<namedSummery, number>;
    colorSummary!: Dexie.Table<namedSummery, number>;
    formSummary!: Dexie.Table<namedSummery, number>;
    habitatSumamry!: Dexie.Table<namedSummery, number>;
    shapeSummary!: Dexie.Table<namedSummery, number>;
    specieSummary!: Dexie.Table<namedSummery, number>;
    statSummary!: Dexie.Table<namedSummery, number>;
    typeSummary!: Dexie.Table<namedSummery, number>;
    // ---------------| data tables |--------------- \\
    halfPokemon!: Dexie.Table<halfPokemon, string>;
    // add Complete Pokemon Table

    constructor(@Inject('DB_NAME') name: string) {
        super(name);
        this.version(1).stores({
            // barries
            barrieSummary: 'count',
            barryFirmness: 'count',
            barryFlovor: 'count',

            // contests
            contestTypeSummary: 'count',
            contestEffectSummary: 'count',
            contestSuperEffectSum: 'count',
            // Encounter Method Sum
            encounterMethodSum: 'count',
            
            // evolution
            evolutionSummary: 'count',
            gameSummary: 'count',
            itemSummary: 'count',
            locationSummary: 'count',
            machineSummary: 'count',
            moveSummary: 'count',
            pokemonSummery: 'count',
            abilitieSummary: 'count',
            characteristicSummary: 'count',
            EggGroupSummary: 'count',
            genderSummary: 'count',
            growthRateSumamry: 'count',
            natureSummary: 'count',
            pokeathlonStatSummary: 'count',
            locationAreaSummary: 'count',
            colorSummary: 'count',
            formSummary: 'count',
            habitatSumamry: 'count',
            shapeSummary: 'count',
            specieSummary: 'count',
            statSummary: 'count',
            typeSummary: 'count',
            halfPokemon: 'name'
        });
    }
}

export default LocalDB;