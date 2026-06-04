import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MetaProfile } from "../../../models/meta.models";

@Component({
    selector:"create-meta",
    templateUrl:"./createMeta.component.html",
    styleUrls:["./createMeta.component.scss"],
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMetaComponent {

    public metaProfiles = signal<MetaProfile[]>([
        {
            id: "asdfa211324",
            name: "Gen 9 OU",
            requirements: []
        },
        {
            id: "mnbv59",
            name: "Draft League 4",
            requirements: []
        },
        {
            id: "latuy41",
            name: "Local Tourney 4",
            requirements: []
        },
        {
            id: "8tqwer1234",
            name: "Rain Meta ",
            requirements: []
        }
        
    ]);

    constructor() {}
}