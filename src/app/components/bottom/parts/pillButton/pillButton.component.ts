import { ChangeDetectionStrategy, Component, computed, Input } from "@angular/core";

@Component({
    selector: "pill-button",
    templateUrl: "./pillButton.component.html",
    styleUrls: ["./pillButton.component.scss"],
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillButtonComponent {
    @Input({required: true}) label!: string;
    @Input({required: true}) onClick!: () => void;

    constructor() {}

    public buttonLabel = computed(() => this.label);
}