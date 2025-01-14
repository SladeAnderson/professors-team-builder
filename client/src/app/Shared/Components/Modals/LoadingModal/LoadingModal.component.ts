import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog'
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
    selector:"loadModalComponent",
    imports:[MatProgressBar,MatDialogContent,MatDialogActions],
    templateUrl:"./LoadingModal.component.html",
    styleUrl:"./LoadingModal.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
    constructor(public dialogRef: MatDialogRef<ModalComponent>) {

    }


    onNoClick():void {
        this.dialogRef.close();
    }
}