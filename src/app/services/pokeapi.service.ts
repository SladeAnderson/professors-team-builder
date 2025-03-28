import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { pokemonSummery } from "../models/pokemonSummery.model";
import { asyncScheduler, catchError, combineLatest, concatMap, from, map, mergeMap, Observable, of, scheduled, tap } from "rxjs";
import { HttpClient, HttpContext } from "@angular/common/http";
import { halfPokemon, Link } from "../models/pokemonList.model";

@Injectable({
    providedIn:"root",
})
export class Pokeapi {

    constructor(private http: HttpClient) {}

    
    private getSummary$():Observable<pokemonSummery> {
        const localDB$ = from(localDB.pokemonSummery.toArray());
        
        return localDB$.pipe(
            concatMap((value)=>{
                if (value.length === 0) {
                    
                    return this.http.get<pokemonSummery[][0]>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).pipe(
                        mergeMap(value=>{   
                            localDB.pokemonSummery.add(value).catch(err => {
                                console.error("Failed to store summmary",err);
                            });
                            
                            return of(value);
                        }));
                    }
                    
                    return of(value[0])
                })
            );
    }
    
    public getLocalPokeSummary$():Observable<halfPokemon[]> {
        const localDB$ = scheduled(localDB.halfPokemon.toArray(),asyncScheduler);

        return localDB$.pipe(
            concatMap((value) => {

                if (value.length === 0) {
                    console.log("Local DB is empty, \n Fetching inital summmary from PokeAPI...");
                    let summary: Observable<Link[]> = this.getSummary$().pipe(
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

   


}