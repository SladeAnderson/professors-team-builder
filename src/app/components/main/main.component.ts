import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector:"main-screen",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[],
    templateUrl:"./main.component.html",
    styleUrls:["./main.component.scss"],
    standalone: true,

}) 
export class MainComponent {
    constructor() {}

}