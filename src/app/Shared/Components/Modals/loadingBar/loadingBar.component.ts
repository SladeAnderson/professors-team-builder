import { ChangeDetectionStrategy, Component, inject, signal,effect, OnInit, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { MatDialogContent, MatDialogActions,MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatProgressBar } from "@angular/material/progress-bar";
import { Subscription } from "rxjs";
import { LoadingService } from "../../../../services/loading.service";


interface props {
    currentStage: string;
}

@Component({
    selector: "loading-bar",
    imports: [MatProgressBar, MatDialogContent, MatDialogActions],
    templateUrl: "./loadingBar.component.html",
    styleUrls: ["./loadingBar.component.scss"],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class loadBar {

    constructor(public dialogRef: MatDialogRef<loadBar>,public loadingService: LoadingService) {}
  
}