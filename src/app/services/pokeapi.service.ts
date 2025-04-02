import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { namedSummery } from "../models/summery.model";
import { asyncScheduler, catchError, combineLatest, concatMap, from, map, mergeMap, Observable, of, scheduled, tap } from "rxjs";
import { HttpClient, HttpContext } from "@angular/common/http";
import { halfPokemon } from "../models/pokemonList.model";
import { Link } from "../models/core.model";

@Injectable({
    providedIn:"root",
})
export class Pokeapi {

    constructor(private http: HttpClient) {}
    
    // ---------------| summaries |--------------- \\

    // berrie's

    private getBerrieSummary$() {
        const localDB$ = scheduled(localDB.barrieSummary.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/berry?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.barrieSummary.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
                })
            );
    }

    private getBerryFirmnessSum$(){
        const localDB$ = scheduled(localDB.barryFirmnessSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/berry-firmness?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.barryFirmnessSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getBerryFlavorSum$() {
        const localDB$ = scheduled(localDB.barryFlovorSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/berry-flavor?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.barryFlovorSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    // contest's
    
    private getContestTypeSum$() {
        const localDB$ = scheduled(localDB.contestTypeSummary.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/contest-type?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.barrieSummary.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getContestEffectSum$() {
        const localDB$ = scheduled(localDB.contestEffectSummary.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/contest-effect?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.contestEffectSummary.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getContestSuperEffectSum$() {
        const localDB$ = scheduled(localDB.contestSuperEffectSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/super-contest-effect?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.contestSuperEffectSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    // Encounter's
    
    private getEncounterMethodSum$() {
        const localDB$ = scheduled(localDB.encounterMethodSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/encounter-method?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.encounterMethodSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    

    // evolution
    
    private getEvolutionSummary$() {
        
    }
    
    private getGameSummary$() {
        
    }
    
    private getItemSummary$() {
        
    }
    
    private getLocationSummary$() {
        
    }
    
    private getMachineSummary$() {
        
    }
    
    private getMoveSummary$() {
        
    }

    // ---------------| pkmn and details summaries |--------------- \\
    
    private getPkmnSummary$():Observable<namedSummery> {
        const localDB$ = scheduled(localDB.pokemonSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.pokemonSummery.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
                })
            );
    }

    private getAbilitieSummary$() {

    }

    private getCharacteristicSummary$() {

    }

    private getEggGroupSummary$() {

    }

    private getGenderSumary$() {

    }

    private getGrowthRateSummary$() {

    }

    private getNatureSummary$() {

    }

    private getPokeathlonStatSummary$() {

    }

    private getLocationAreaSummary$() {

    }

    private getColorSummary$() {

    }

    private getFormSummary$() {

    }

    private getHabitatSummary$() {

    }

    private getShapeSummary$() {

    }

    private getSpecieSummary$() {

    }

    private getStatSummary$() {

    }

    private getTypeSummary$() {

    }

    // ---------------| Api/LocalDB calls |--------------- \\

    // Pkmn Berries
    

    // Pkmn Contests
    

    // Pkmn Encounters
    

    // Pkmn Evolutions
    

    // Pkmn Games
    

    // Pkmn Items
    

    // Pkmn Locations
    

    // Pkmn Machines
    

    // Pkmn Moves
    

    // Pkmn 

    public getLocalPkmns$():Observable<halfPokemon[]> {
        const localDB$ = scheduled(localDB.halfPokemon.toArray(),asyncScheduler);

        return localDB$.pipe(
            concatMap((value) => {

                if (value.length === 0) {
                    console.log("Local DB is empty, \n Fetching inital summmary from PokeAPI...");
                    let summary: Observable<Link[]> = this.getPkmnSummary$().pipe(
                        map(value=> {
                            return value.results;   
                        })
                    );

                   return summary.pipe(
                        mergeMap(link => {
                            return combineLatest(
                                link.map(
                                    (l)=> this.http.get<halfPokemon>(l.url)
                                )
                            )
                        }),
                        concatMap((pkmnSum)=> {
                            let y = scheduled(localDB.halfPokemon.bulkAdd(pkmnSum),asyncScheduler)

                            return combineLatest([of(pkmnSum), y]);
                        }),
                        map(([pkmnSum, _]) => {
                            return pkmnSum;
                        }),
                    )
                    
                    
                }

                return of(value);
            })
        )
    }

    // Abilities
    
    // Characteristics
    
    // Egg Groups
    
    // Genders
    
    // Growth Rates
    
    // Natures
    
    // Pokeathlon Stats
    
    // Pkmn Location Areas
    
    // Pkmn Colors
    
    // Pkmn Forms

    // Pkmn Habitats

    // Pkmn Shapes

    // Pkmn Species

    // Pkmn Stats

    // Pkmn Types

}