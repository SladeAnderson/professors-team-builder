import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector:"create-meta",
    templateUrl:"./createMeta.component.html",
    styleUrls:["./createMeta.component.scss"],
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMetaComponent {

    constructor() {}
}