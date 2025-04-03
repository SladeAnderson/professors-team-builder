import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { scheduled, asyncScheduler, concatMap, combineLatest, of } from "rxjs";
import { namedSummery } from "../models/summery.model";
import localDB from "./professorsDatabase.service";

@Injectable({
    providedIn:"root"
})
export class itemService {
    constructor(private http: HttpClient) {}

    // summeries

    private getItemSummery$() {
        const localDB$ = scheduled(localDB.itemSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/item?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.itemSummery.add(value),asyncScheduler);
                            
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

    private getItemAttrSum$() {
        const localDB$ = scheduled(localDB.ItemAttrSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/item-attribute?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.ItemAttrSum.add(value),asyncScheduler);
                            
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

    private getItemCateSum$() {
        const localDB$ = scheduled(localDB.itemCateSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/item-category?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.itemCateSum.add(value),asyncScheduler);
                            
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

    private getItemFESum$() {
        const localDB$ = scheduled(localDB.ItemFESum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/item-fling-effect?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.ItemFESum.add(value),asyncScheduler);
                            
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

    private getItemPocketSum$() {
        const localDB$ = scheduled(localDB.ItemPocketSum.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/item-pocket?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.ItemPocketSum.add(value),asyncScheduler);
                            
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