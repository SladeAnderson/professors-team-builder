import { Injectable } from "@angular/core";
import localDB from "./professorsDatabase.service";
import { HttpClient } from "@angular/common/http";
import { asyncScheduler, combineLatest, concatMap, Observable, of, scheduled } from "rxjs";
import { team } from "../models/team.model";
import { halfPokemon } from "../models/pokemonList.model";

@Injectable({
    providedIn: "root",
})
export class teamService {
    //internal variables

    constructor(private http: HttpClient) {

    }

    public createParty$(name: string, gen: string, team: halfPokemon[]) {
        const localDB$ = scheduled(localDB.userTeams.toArray(), asyncScheduler); 

        localDB$.pipe(
            concatMap((value) => {
                let newTeam:team = {
                    id: value.length++, 
                    name: name,
                    game: gen,
                    pkmnTeam: team
                } 

                let req = scheduled(localDB.userTeams.add(newTeam),asyncScheduler);

                return combineLatest([of(value), req])
            }),
            concatMap((teamArr,_) => {
                return teamArr;
            })
        )
     
    }

    public getParty$(name: string):Observable<team> {
        const localDB$ = scheduled(localDB.userTeams.toArray(), asyncScheduler);

        return localDB$.pipe(
            concatMap((teams) => {

                if (teams.length !== 0) {
                    
                    teams.forEach((team) => {

                        if (team.name === name) {
                            return team;
                        }

                        console.warn("couldn't find the team!");

                        return [] as team[]
                    })

                }

                console.warn("No teams!");

                return [] as team[];
            })
        )
    }



    public updateParty$(id: number ,name: string, game: string, newTeam: halfPokemon[] ) {
        // const localDB$ = scheduled(localDB.userTeams.toArray(), asyncScheduler);

        // localDB$.pipe(
        //     concatMap((teams) => {
        //         if (teams.length !== 0) {

        //             let teamsNames = teams.flatMap((value) => value.name);

        //             teamsNames.forEach((teamName) => {
        //                 if (teamName === name) {
        //                     scheduled(localDB.userTeams.update(name, {
        //                             id: teams.length++,
        //                             name: name,
        //                             game: game,
        //                             pkmnTeam: newTeam
        //                         }),asyncScheduler);
        //                 }
        //             })

        //         }

        //         return teams;
        //     })
        // )
    }
    
    public deleteParty$() {
        
    }



}