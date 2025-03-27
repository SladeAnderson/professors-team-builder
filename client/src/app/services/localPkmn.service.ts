import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { concatMap, map, mergeMap, Observable, of, switchMap, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { halfPokemon } from "../models/pokemonList.model";
import { pokemonSummery } from "../models/pokemonSummery.model";

@Injectable({
    providedIn:"root",
})
export class LocalPkmn {
    constructor(private http: HttpClient) {
    }

    // public getSummary$():Observable<pokemonSummery> {
    //    

    //     return localDb$.pipe(
    //         concatMap((table) => {
    //             if (await table.count() === 0) {
    //                 // get summary from pokeapi

    //                 return this.http.get<pokemonSummery>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    //             }

    //             // get summary from local db
    //             let Summary = await table.get(0);
    //             return of(Summary ?? {} as pokemonSummery);
    //         })
    //     )

    // }

    // public async getLocalPkmnSum$():Observable<halfPokemon[]> {
    //     let localDb$ = of(this.localdb.halfPokemon);

    //     return localDb$.pipe(
    //         concatMap(async (table) => {
    //             if (await table.count() === 0) {
                    
    //                 let summary = this.getSummary$();

                 


                   

    //             }
    //             let pkmns = await table.toArray();

    //             return of(pkmns);
    //         })
    //     )
    // }

    public getPkmnSummary$(): Observable<halfPokemon[]> {
        let summary$ = of(localDB.pokemonSummery);

        return summary$.pipe(
            switchMap(async (table) => {
                // Check if the summary exists in the local database
                if (await table.count() === 0) {
                    // Fetch the summary from the PokeAPI
                    this.http.get<pokemonSummery>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).pipe(
                        tap(async (summary)=>{
                            // Save the summary to the local database
                            await table.put(summary);
                        })
                    );

                }

                // Retrieve the summary from the local database
                const storedSummary = await table.get(0) ?? {} as pokemonSummery;

                // Use the summary results to fetch all halfPokemon
                const halfPokemonRequests = storedSummary.results.map((result) =>
                    fetch(result.url)
                );

                // Wait for all halfPokemon requests to complete
                const halfPokemonList = await Promise.all(halfPokemonRequests);

                // Map the responses to halfPokemon objects
                const halfPkmnArray = await Promise.all(
                    halfPokemonList.map(async (response) => {
                        const data:halfPokemon = await response.json();
                        return {
                            name: data.name,
                            id: data.id,
                            base_experience: data.base_experience,
                            height: data.height,
                            is_default: data.is_default,
                            order: data.order,
                            weight: data.weight,
                            abilities: data.abilities,
                            forms: data.forms,
                            game_indices: data.game_indices,
                            held_items: data.held_items,
                            location_area_encounters: data.location_area_encounters,
                            moves: data.moves,
                            species: data.species,
                            sprites: data.sprites,
                            cries: data.cries,
                            stats: data.stats,
                            types: data.types,
                            past_types: data.past_types
                        } as halfPokemon;
                    })
                );

                return halfPkmnArray;
            }),
        );
    }

}