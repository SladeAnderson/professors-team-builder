import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { pokemonSummery } from "../models/pokemonSummery.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { concatMap, from, Observable, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:"root",
    
})
export class pokeapi {

    constructor(private http: HttpClient) {}

    getPokemonSummary$():Observable<pokemonSummery[]> {
        const localDB$ = from(localDB.pokemonSummery.toArray());

        return localDB$.pipe(
            concatMap((value)=>{
                if (value.length === 0) {
                    return this.http.get<pokemonSummery[]>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).pipe(
                    tap(value=>{
                        localDB.pokemonSummery.bulkAdd(value);
                    }));
                }
                return of(value)
            })
        );
    }

    

}