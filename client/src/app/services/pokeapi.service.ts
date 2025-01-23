import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { pokemonSummery } from "../models/pokemonSummery.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, combineLatest, concatMap, from, mergeMap, Observable, of, tap } from "rxjs";
import { HttpClient, HttpContext } from "@angular/common/http";
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
            const getPoke = () => {
                
                return this.http.post<halfPokemon[]>("https://192.168.1.212:5200/api/Pkmn/GetAllPkmn",{
                    summary
                });
            };
            

            const x = getPoke().pipe(
                tap(value =>{
                    console.log("heyey",value)

                })
            );

            return x;
        }

        return new Observable<halfPokemon[]>;
    }

   


}