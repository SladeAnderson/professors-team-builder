import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { scheduled, asyncScheduler, concatMap, combineLatest, of } from "rxjs";
import { namedSummery } from "../models/summery.model";
import localDB from "./professorsDatabase.service";

@Injectable({
    providedIn:"root"
})
export class moveService {
    constructor(private http:HttpClient) {}

    // summeries

    private getMoveSummery$() {
        const localDB$ = scheduled(localDB.moveSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/move?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.moveSummery.add(value),asyncScheduler);
                            
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

    private getMvAlimentSum$() {
        const localDB$ = scheduled(localDB.mvAlimentSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/move-ailment?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.mvAlimentSum.add(value),asyncScheduler);
                            
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

    private getMvBStyleSum$() {
        const localDB$ = scheduled(localDB.MvBStyleSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/move-battle-style?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.MvBStyleSum.add(value),asyncScheduler);
                            
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

    private getMvCateGorySum$() {
        const localDB$ = scheduled(localDB.mvCategorySum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/move-category?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.mvCategorySum.add(value),asyncScheduler);
                            
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

    private getMvDmgClassSum$() {
        const localDB$ = scheduled(localDB.mvDmgClassSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/move-damage-class?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.mvDmgClassSum.add(value),asyncScheduler);
                            
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

    private getMvLrnMethodSum$() {
        const localDB$ = scheduled(localDB.mvLrnMethodSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/move-learn-method?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.mvLrnMethodSum.add(value),asyncScheduler);
                            
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

    private getMvTargetSum$() {
        const localDB$ = scheduled(localDB.mvTargetSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/move-target?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.mvTargetSum.add(value),asyncScheduler);
                            
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
}