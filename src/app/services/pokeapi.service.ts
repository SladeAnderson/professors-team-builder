import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { namedSummery } from "../models/summery.model";
import { asyncScheduler, catchError, combineLatest, concatMap, from, map, mergeMap, Observable, of, scheduled, tap } from "rxjs";
import { HttpClient, HttpContext } from "@angular/common/http";
import { halfPokemon } from "../models/pokemonList.model";
import { Link } from "../models/core.model";

@Injectable({
    providedIn:"root",
})
export class Pokeapi {

    constructor(private http: HttpClient) {}
    
    private getSummary$():Observable<namedSummery> {
        const localDB$ = scheduled(localDB.pokemonSummery.toArray(), asyncScheduler);
        
        return localDB$.pipe(
            concatMap((value)=>{
                
                if (value.length === 0) {
                    
                    return this.http.get<namedSummery>(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).pipe(
                        concatMap(value=>{   
                            let req = scheduled(localDB.pokemonSummery.add(value),asyncScheduler);
                            
                            return combineLatest([of(value), req])
                        }),
                        concatMap((summary,_) =>{
                            return of(summary[0]);
                        })
                    );
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

    public sortPkmnListByGame(generation: string): Observable<halfPokemon[]> {
        const pkmnList$ = this.getLocalPokeSummary$();

        return pkmnList$.pipe(
            map((list) => {
                return list.filter((pkmn) => {
                    return pkmn.game_indices.some((game) => game.version.name === generation);
                });
            }),
            catchError((error) => {
                console.error("Error filtering Pokémon list by game:", error);
                return of([]);
            })
        )

    }

    public getListOfGames$(): Observable<string[]> {
        console.log("Fetching list of Pokémon games...");
        return this.getLocalPokeSummary$().pipe(
            concatMap((list)=> {
                const games = list.flatMap((pkmn) => 
                    pkmn.game_indices.map((game) => game.version.name).sort((a, b) => a > b ? 1 : -1)
                );
                
                return of([...new Set(games)]); // Remove duplicates
            })
        )

    }



    // getting pokemon details from the localDB/pokeapi

    // Pkmn Berries

    // Pkmn Contests

    // Pkmn Encounters

    // Pkmn Evolutions

    // Pkmn Games

    // Pkmn Items

    // Pkmn Locations

    // Pkmn Machines

    // Pkmn Moves

    // Pkmn Details
    
        // Abilities

        // Characteristics

        // Egg Groups

        // Genders

        // Growth Rates

        // Natures

        // Pokeathlon Stats

        // Pkmn Location Areas

        // Pkmn Colors

        // Pkmn Forms

        // Pkmn Habitats

        // Pkmn Shapes

        // Pkmn Species

        // Pkmn Stats

        // Pkmn Types

}