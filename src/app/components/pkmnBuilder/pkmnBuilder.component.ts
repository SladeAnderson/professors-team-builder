import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector:"pkmn-builder",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[],
    templateUrl:"./pkmnBuilder.component.html",
    styleUrls:["./pkmnBuilder.component.scss"],
    standalone: true,
})
export class PkmnBuilderComponent {
    constructor() {}

    // Additional methods and properties for the Pokémon Builder can be added here
} 