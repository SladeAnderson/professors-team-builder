import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { scheduled, asyncScheduler, concatMap, combineLatest, of } from "rxjs";
import { namedSummery } from "../models/summery.model";
import localDB from "./professorsDatabase.service";

@Injectable({
    providedIn:"root"
})
export class languageService {
    constructor(private http:HttpClient) {}

    // summery

    private getLangSummery$() {
        const localDB$ = scheduled(localDB.langSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/language?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.langSummery.add(value),asyncScheduler);
                            
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

    // localDB|PokeApi call
}