import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, input, OnInit, output } from "@angular/core";

@Component({
    selector: "app-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class Header{
    constructor() {
        
    }

}