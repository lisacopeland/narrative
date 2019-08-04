import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AlertDialogInterface {
  header: string;
  cancelTooltip: string;
  message: string;
  buttons: string[];
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: 'alert-dialog.component.html',
})
export class AlertDialogComponent implements OnInit {

  alertData: AlertDialogInterface;
  toolTipText = '';
  headerText = '';
  dialogButtons = [];

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.alertData = this.data;
    this.toolTipText = (this.alertData.cancelTooltip) ? this.alertData.cancelTooltip : 'Return from dialog';
    this.headerText = (this.alertData.header) ? this.alertData.header : 'User Message';
    if (!this.alertData.buttons || !this.alertData.buttons.length) {
      this.dialogButtons.push('Close');
    } else {
      this.dialogButtons = this.alertData.buttons.map(x => {
        return x;
      });
    }
  }

  onButtonClick(buttonText): void {
    this.dialogRef.close(buttonText);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
