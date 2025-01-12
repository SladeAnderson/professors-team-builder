import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector:"main-body",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[],
    templateUrl:"./main.component.html",

}) 
export class MainComponent {
    constructor() {}

}