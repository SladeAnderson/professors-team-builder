import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MetaProfile } from "../../models/meta.models";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector:"meta-profiles",
    templateUrl:"./metaProfiles.component.html",
    styleUrls:["./metaProfiles.component.scss"],
    standalone: true,
    imports: [MatTabsModule, MatButtonModule],
    changeDetection:  ChangeDetectionStrategy.OnPush,
})
export class MetaProfilesComponent {

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