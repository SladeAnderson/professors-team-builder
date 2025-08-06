import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { PkmnViewerComponent } from "../pkmnViewer/pkmnViewer.component";
import { PkmnBuilderComponent } from "../pkmnBuilder/pkmnBuilder.component";

@Component({
    selector:"main-screen",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[MatTabsModule, PkmnViewerComponent, PkmnBuilderComponent],
    templateUrl:"./main.component.html",
    styleUrls:["./main.component.scss"],
    standalone: true,

}) 
export class MainComponent {
    constructor() {}

}