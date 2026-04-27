import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector:"main-screen",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[RouterOutlet],
    templateUrl:"./main.component.html",
    styleUrls:["./main.component.scss"],
    standalone: true,

}) 
export class MainComponent {
    constructor() {}

}