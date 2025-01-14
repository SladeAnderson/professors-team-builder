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

    getAllHalfPokemon$(summary:pokemonSummery):Observable<halfPokemon[]> {

        if (summary) {
            console.log(summary)
            const localDB$ = from(localDB.halfPokemon.toArray());
            const getPoke = (pokemon: Link) => {
                return this.http.get<halfPokemon>(pokemon.url);
            };
            
            return localDB$.pipe(
                tap((val)=>{
                    console.log('asdf',val);
                    
                }),
                concatMap((value)=>{
                    console.log('this far',value);
                    if (value.length === 0) {
                        const getHalf$ = summary.results.map(poke=>getPoke(poke));
    
                        return combineLatest(getHalf$).pipe(
                            concatMap((value)=>{
                                console.log(value);

                                return from(localDB.halfPokemon.toArray());
                            })
                        )
                    }
                    return of(value);
                }),
                tap(pokeArr => {
                    if (!!pokeArr.length) {
                        localDB.halfPokemon.bulkAdd(pokeArr.filter(x=>!!x.name));
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

    getHalfPokemonByName$(summary:pokemonSummery[],name:string):Observable<halfPokemon> {
        
        const summaryResults = summary.flatMap(summary=>summary.results);

        summaryResults.forEach(pokemon=>{
            if (pokemon.name === name) {
                const localpoke = from(localDB.halfPokemon.get(name))

                localpoke.pipe(
                    tap(value=>{
                        if (value) {
                            return of(value);
                        } else {
                            return this.http.get<halfPokemon>(pokemon.url).pipe(
                            tap(value=>{
                                localDB.halfPokemon.add(value)
                            }))
                        }
                    })
                )
            }
        });

        return new Observable<halfPokemon>;
    }


}