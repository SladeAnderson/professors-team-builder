import { ChangeDetectionStrategy, Component, computed, Input, Signal } from "@angular/core";
import { halfPokemon } from "../../models/pokemonList.model";
import { teamMember } from "../../models/team.model";

@Component({
    selector: "team-screen",
    templateUrl: "./TeamScreen.component.html",
    styleUrl: "./TeamScreen.component.scss",
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamScreenComponent {
    @Input({required: true}) team!: Signal<teamMember[]>;

    constructor() {}

    public FullTeam = computed<teamMember[]>(() => this.team() );

        
}