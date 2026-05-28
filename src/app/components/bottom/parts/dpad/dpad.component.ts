import { ChangeDetectionStrategy, Component, Input, input } from "@angular/core";
import { required } from "@angular/forms/signals";

@Component({
    selector: "dpad",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: "./dpad.component.html",
    styleUrls: ["./dpad.component.scss"],
    standalone: true,
})
export class DpadComponent {
    @Input({required: true}) onClickUp: () => void = () => {};
    @Input({required: true}) onClickDown: () => void = () => {};
    @Input({required: true}) onClickLeft: () => void = () => {};
    @Input({required: true}) onClickRight: () => void = () => {};

    constructor() {}
}