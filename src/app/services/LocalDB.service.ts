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
    barrieSummery!: Dexie.Table<namedSummery, number>;
    barryFirmnessSum!: Dexie.Table<namedSummery, number>;
    barryFlovorSum!: Dexie.Table<namedSummery, number>;

    // contests
    contestTypeSummery!: Dexie.Table<namedSummery, number>;
    contestEffectSummery!: Dexie.Table<namedSummery, number>;
    contestSuperEffectSum!: Dexie.Table<namedSummery, number>;
    
    // encounters
    encounterMethodSum!: Dexie.Table<namedSummery, number>;
    EncCondSum!: Dexie.Table<namedSummery, number>;
    EncCondValSum!: Dexie.Table<namedSummery, number>;

    // evolution
    evoChainSum!: Dexie.Table<namedSummery, number>;
    evoTriggerSum!: Dexie.Table<namedSummery, number>;

    // games
    generationSum!: Dexie.Table<namedSummery, number>;
    pokedexSum!: Dexie.Table<namedSummery, number>;
    versionSum!: Dexie.Table<namedSummery, number>;
    versionGroupSum!: Dexie.Table<namedSummery, number>;
    
    // items
    itemSummery!: Dexie.Table<namedSummery, number>;
    ItemAttrSum!: Dexie.Table<namedSummery, number>;
    itemCateSum!: Dexie.Table<namedSummery, number>;
    ItemFESum!: Dexie.Table<namedSummery, number>;
    ItemPocketSum!: Dexie.Table<namedSummery, number>;
    
    // locations
    locationSummery!: Dexie.Table<namedSummery, number>;
    locAreaSummery!: Dexie.Table<namedSummery, number>;
    palParkAreaSum!: Dexie.Table<namedSummery, number>;
    regionSummery!: Dexie.Table<namedSummery, number>;

    // machine's
    machineSummery!: Dexie.Table<namedSummery, number>;
    
    // moves
    moveSummery!: Dexie.Table<namedSummery, number>;
    mvAlimentSum!: Dexie.Table<namedSummery, number>;
    MvBStyleSum!: Dexie.Table<namedSummery, number>;
    mvCategorySum!: Dexie.Table<namedSummery, number>;
    mvDmgClassSum!: Dexie.Table<namedSummery, number>;
    mvLrnMethodSum!: Dexie.Table<namedSummery, number>;
    mvTargetSum!: Dexie.Table<namedSummery, number>;

    // pkmn and pkmn details
    abilitieSum!: Dexie.Table<namedSummery, number>;
    characteristicSum!: Dexie.Table<namedSummery, number>;
    EggGroupSum!: Dexie.Table<namedSummery, number>;
    genderSum!: Dexie.Table<namedSummery, number>;
    growthRateSum!: Dexie.Table<namedSummery, number>;
    natureSum!: Dexie.Table<namedSummery, number>;
    pokeathlonStatSum!: Dexie.Table<namedSummery, number>;
    pokemonSummery!: Dexie.Table<namedSummery, number>;
    colorSum!: Dexie.Table<namedSummery, number>;
    formSum!: Dexie.Table<namedSummery, number>;
    habitatSum!: Dexie.Table<namedSummery, number>;
    shapeSum!: Dexie.Table<namedSummery, number>;
    specieSum!: Dexie.Table<namedSummery, number>;
    statSum!: Dexie.Table<namedSummery, number>;
    typeSum!: Dexie.Table<namedSummery, number>;
    
    // ---------------| data tables |--------------- \\
    halfPokemon!: Dexie.Table<halfPokemon, string | number>;
    // add Complete Pokemon Table

    constructor(@Inject('DB_NAME') name: string) {
        super(name);
        this.version(1).stores({
            // barries
            barrieSummery: 'count',
            barryFirmness: 'count',
            barryFlovor: 'count',

            // contests
            contestTypeSummery: 'count',
            contestEffectSummery: 'count',
            contestSuperEffectSum: 'count',
            
            // Encounter Method Sum
            encounterMethodSum: 'count',
            EncCondSum: 'count',
            EncCondValSum: 'count',

            // evolution
            evolutionSummery: 'count',

            // games
            generationSum: 'count',
            pokedexSum: `count`,
            versionSum: `count`,
            versionGroupSum: `count`,

            // items
            itemSummery: 'count',
            
            regionSummery: `count`,

            // locations
            locationSummery: 'count',
            machineSummery: 'count',
            moveSummery: 'count',
            pokemonSummery: 'count',
            abilitieSummery: 'count',
            characteristicSummery: 'count',
            EggGroupSummery: 'count',
            genderSummery: 'count',
            growthRateSumamry: 'count',
            natureSummery: 'count',
            pokeathlonStatSummery: 'count',
            pkmnLocationAreaSummery: 'count',
            colorSummery: 'count',
            formSummery: 'count',
            habitatSumamry: 'count',
            shapeSummery: 'count',
            specieSummery: 'count',
            statSummery: 'count',
            typeSummery: 'count',
            halfPokemon: 'name'
        });
    }
}

export default LocalDB;