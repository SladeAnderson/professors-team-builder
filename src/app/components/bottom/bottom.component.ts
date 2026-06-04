import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { DpadComponent } from "./parts/dpad/dpad.component";
import { RoundButtonComponent } from "./parts/roundButton/roundButton.component";
import { PillButtonComponent } from "./parts/pillButton/pillButton.component";
import { Router } from "@angular/router";

@Component({
    selector: "bottom-area",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DpadComponent,RoundButtonComponent, PillButtonComponent],
    templateUrl: "./bottom.component.html",
    styleUrls: ["./bottom.component.scss"],
    standalone: true,
})
export class BottomComponent {
    public router = inject(Router);

    public speakerArr = new Array(16).fill(0);

    constructor() {}

    // Dpad button functions

    public onClickDpadUp = (): void => {
        console.log("up");
    }

    public onClickDpadDown = (): void => {
        console.log("down");
    }
    
    public onClickDpadLeft = (): void => {
        console.log("left");
    }

    public onClickDpadRight = (): void => {
        console.log("right");
    }

    // Round button functions

    public onClickRoundA = (): void => {
        console.log("A");
    }
    
    public onClickRoundB = (): void => {
        console.log("B");
    }

    // Pill button functions

    public onClickStart = (): void => {
        console.log("Start");
    }

    public onClickSelect = (): void => {
        this.router.navigate(["/meta-profiles"]);
        console.log("Select");
    }
}