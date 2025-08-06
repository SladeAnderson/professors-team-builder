import { ChangeDetectionStrategy, Component } from "@angular/core";


@Component({
    selector: "pkmn-viewer",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: "./pkmnViewer.component.html",
    styleUrls: ["./pkmnViewer.component.scss"],
    standalone: true,
})
export class PkmnViewerComponent {
    constructor() {}

    // Additional methods and properties for the Pokémon Viewer can be added here
}