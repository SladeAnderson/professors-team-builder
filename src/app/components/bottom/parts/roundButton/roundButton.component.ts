import { ChangeDetectionStrategy, Component, computed, Input } from "@angular/core";
import { required } from "@angular/forms/signals";

@Component({
    selector: "round-button",
    imports: [],
    templateUrl: "./roundButton.component.html",
    styleUrls: ["./roundButton.component.scss"],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoundButtonComponent {

    @Input({required: true}) onPress: () => void = () => {};
    @Input({required: true}) color!: string;
    @Input({required: true}) label!: string;

    constructor() {}

    public backgroundColor = computed(() => `radial-gradient(circle at 35% 30%, ${this.color}, ${this.color} 70%)`);

    public buttonLabel = computed(() => this.label);
}