import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector:"main-screen",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[],
    templateUrl:"./main.component.html",
    styleUrls:["./main.component.scss"]

}) 
export class MainComponent {
    constructor() {}

}