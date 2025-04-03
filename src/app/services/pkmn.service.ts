import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, scheduled, asyncScheduler, concatMap, combineLatest, of, map, mergeMap } from "rxjs";
import { namedSummery } from "../models/summery.model";
import localDB from "./professorsDatabase.service";
import { Link } from "../models/core.model";
import { halfPokemon } from "../models/pokemonList.model";

@Injectable({
    providedIn:"root"
})
export class pkmnService {
    constructor(private http:HttpClient) {}

    // summeries
    
    private getPkmnSummery$():Observable<namedSummery> {
        const localDB$ = scheduled(localDB.pokemonSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.pokemonSummery.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summery,_) =>{
                            return of(summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
                })
            );
    }

    private getAbilitieSummery$() {
        const localDB$ = scheduled(localDB.abilitieSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/ability?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.abilitieSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getCharacteristicSummery$() {
        const localDB$ = scheduled(localDB.characteristicSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/characteristic?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.characteristicSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getEggGroupSummery$() {
        const localDB$ = scheduled(localDB.EggGroupSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/egg-group?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.EggGroupSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getGenderSumary$() {
        const localDB$ = scheduled(localDB.genderSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/gender?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.genderSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getGrowthRateSummery$() {
        const localDB$ = scheduled(localDB.growthRateSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/growth-rate?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.growthRateSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getNatureSummery$() {
        const localDB$ = scheduled(localDB.natureSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/nature?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.natureSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getPokeathlonStatSummery$() {
        const localDB$ = scheduled(localDB.pokeathlonStatSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokeathlon-stat?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.pokeathlonStatSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    //------------------------------------
    // pkmn location areas ignored for now
    //------------------------------------

    private getColorSummery$() {
        const localDB$ = scheduled(localDB.colorSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon-color?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.colorSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getFormSummery$() {
        const localDB$ = scheduled(localDB.formSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon-form?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.formSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getHabitatSummery$() {
        const localDB$ = scheduled(localDB.habitatSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon-habitat?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.habitatSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getShapeSummery$() {
        const localDB$ = scheduled(localDB.shapeSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon-shape?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.shapeSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getSpecieSummery$() {
        const localDB$ = scheduled(localDB.specieSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.specieSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getStatSummery$() {
        const localDB$ = scheduled(localDB.statSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/stat?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.statSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    private getTypeSummery$() {
        const localDB$ = scheduled(localDB.typeSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/type?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.typeSum.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
                        })
                    );
                    }
                    
                    return of(value[0])
            })
        );
    }

    // localDB|PokeApi calls

    public getLocalPkmns$():Observable<halfPokemon[]> {
        const localDB$ = scheduled(localDB.halfPokemon.toArray(),asyncScheduler);

        return localDB$.pipe(
            concatMap((value) => {

                if (value.length === 0) {
                    console.log("Local DB is empty, \n Fetching inital summmary from PokeAPI...");
                    let summery: Observable<Link[]> = this.getPkmnSummery$().pipe(
                        map(value=> {
                            return value.results;   
                        })
                    );

                   return summery.pipe(
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
}