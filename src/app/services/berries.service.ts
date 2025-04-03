import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { scheduled, asyncScheduler, concatMap, combineLatest, of } from "rxjs";
import { namedSummery } from "../models/summery.model";
import localDB from "./professorsDatabase.service";


@Injectable({
    providedIn:"root",
})
export class berrieService {

    constructor(private http: HttpClient) {}

    // Summeries

    private getBerrieSummery$() {
        const localDB$ = scheduled(localDB.barrieSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/berry?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.barrieSummery.add(value),asyncScheduler);
                            
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
                        concatMap((Summery,_) =>{
                            return of(Summery[0]);
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
}