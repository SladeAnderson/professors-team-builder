import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
    selector:"main-screen",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[MatTabsModule],
    templateUrl:"./main.component.html",
    styleUrls:["./main.component.scss"],
    standalone: true,

}) 
export class MainComponent {
    constructor() {}

}