import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, input, OnInit, output } from "@angular/core";

@Component({
    selector: "header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: "./header.component.html",
})
export class Header{
    constructor() {
        
    }

}