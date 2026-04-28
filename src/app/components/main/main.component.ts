import { ChangeDetectionStrategy, Component, input } from "@angular/core";
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

    // props \\
    public mode = input<string>("TEAM");
    public PkmnTotal = input<number>(0);
    public CurrentPkmnAmt = input<number>(0);

    constructor() {}

}