import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { Subscription } from "rxjs";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Pokeapi } from "../../services/pokeapi.service";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips"

@Component({
    selector:"pkmn-builder",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[
        MatSelectModule, 
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatChipsModule,
    ],
    templateUrl:"./pkmnBuilder.component.html",
    styleUrls:["./pkmnBuilder.component.scss"],
    standalone: true,
})
export class PkmnBuilderComponent implements OnDestroy, OnInit {
    constructor(public pokeapi: Pokeapi,private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            selectedGame: ["black", [Validators.required]],
            teamName: ["My Team", [Validators.required, Validators.minLength(3)]],
        });
    }

    private subs = new Subscription;
    ;
    public pkmnGames = signal<string[]>([]);
    public formGroup: FormGroup;

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
    
    public ngOnInit(): void {
        let sub = this.pokeapi.getListOfGames$().subscribe((games) => {
            this.pkmnGames.set(games);
            console.log("Available Pokémon Games: ", games);
        })

        this.subs.add(sub);
    }

} 