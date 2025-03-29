import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatDialogContent, MatDialogActions,MatDialogRef } from "@angular/material/dialog";
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
    selector: "loading-bar",
    imports: [MatProgressBar,MatDialogContent,MatDialogActions],
    templateUrl: "./loadingBar.component.html",
    styleUrls: ["./loadingBar.component.scss"],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class loadBar {
    
    constructor(public dialogRef: MatDialogRef<loadBar>) {}

    onNoClick(): void {
        this.dialogRef.close();
    }    
}