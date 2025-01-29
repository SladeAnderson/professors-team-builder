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


    getAllHalfPokemon$():Observable<halfPokemon[]> {
        return this.http.post<halfPokemon[]>(`https://192.168.1.212:5200/api/Pkmn/GetAllPkmn`,{}).pipe(
            tap(value =>{
                console.log("Cashed Half Pkmn: ",value);
            })
        );
    }

   


}