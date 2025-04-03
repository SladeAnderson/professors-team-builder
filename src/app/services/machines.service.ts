import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { scheduled, asyncScheduler, concatMap, combineLatest, of } from "rxjs";
import { namedSummery } from "../models/summery.model";
import localDB from "./professorsDatabase.service";

@Injectable({
    providedIn:"root"
})
export class MachineService {
    constructor(private http:HttpClient) {}

    // summery

    private getMachineSummery$() {
        const localDB$ = scheduled(localDB.machineSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/machine?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.machineSummery.add(value),asyncScheduler);
                            
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