import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { pokemonSummery } from "../models/pokemonSummery.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, combineLatest, concatMap, from, mergeMap, Observable, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { halfPokemon, Link } from "../models/pokemonList.model";


@Injectable({
    providedIn:"root",
})
export class Pokeapi {

    constructor(private http: HttpClient) {}

    getPokemonSummary$():Observable<pokemonSummery> {
        const localDB$ = from(localDB.pokemonSummery.toArray());

        return localDB$.pipe(
            concatMap((value)=>{
                if (value.length === 0) {
                    
                    return this.http.get<pokemonSummery[][0]>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).pipe(
                    
                        concatMap(value=>{
                            
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

    getAllHalfPokemon$(summary:Link[]):Observable<halfPokemon[]> {

        if (!!summary.length) {
            console.log(summary)
            const localDB$ = from(localDB.halfPokemon.toArray());
            const getPoke = (pokemon: Link) => {
                return this.http.get<halfPokemon>("api/PkmnController/");
            };
            
            return localDB$.pipe(
                concatMap((value)=>{
                    if (value.length === 0) {
                        const getHalf$ = summary.map(poke=>getPoke(poke));
    
                        return combineLatest(getHalf$).pipe(
                            tap(pokeArr => {
                                localDB.halfPokemon.bulkAdd(pokeArr.filter(x=>!!x.name)).catch((err)=>{
                                    console.error('failed to add halfPokemon!', err);
                                });
                            }),
                            concatMap((value)=>{
                                console.log(value);

                                return of(value);
                            }),
                            catchError((err)=>{
                                console.error('failed to get half poke!', err);
                                return of([])
                            })
                        )
                    } else {
                        return of(value);
                    }
                }),
                catchError((err, caught)=>{
                    console.warn("halfPokeError", err);
                    if (!!err.message) {
                        return of([]);
                    }
                    return localDB$
                }),
            )

        }

        return new Observable<halfPokemon[]>;
    }

   


}