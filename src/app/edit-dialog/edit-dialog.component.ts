import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuyOrderInterfaceWithId, BuyOrderInterface } from '../shared/interfaces/buy-order.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  editTitle = 'Edit a buy order';
  editMode = true;
  buyOrder: BuyOrderInterfaceWithId;
  orderForm: FormGroup;
  typeOptions = ['Device Location', 'Device Behavior', 'ID Mapping'];
  constructor(private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BuyOrderInterfaceWithId) { }

  ngOnInit() {
    this.initForm();
    if (this.data) {
      this.editMode = true;
      this.buyOrder = this.data;
      this.patchForm();
    } else {
      this.editTitle = 'Add New Buy Order';
    }
  }

  initForm() {
    this.orderForm = new FormGroup({
      name: new FormControl('', Validators.required),
      maxBidPrice: new FormControl(0, Validators.required),
      dataPackageType: new FormControl('Device Location', Validators.required)
    });
  }

  patchForm() {
    this.orderForm.patchValue({
      name: this.buyOrder.name,
      maxBidPrice: this.buyOrder.max_bid_price,
      dataPackageType: this.buyOrder.data_package_type
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.orderForm.invalid) {
      this.snackBar.open('Please fill in required fields', 'Error', {
        duration: 5000
      });
    } else {
      const newBuyOrder: BuyOrderInterface = {
        name: this.orderForm.value.name,
        max_bid_price: this.orderForm.value.maxBidPrice,
        data_package_type: this.orderForm.value.dataPackageType
      };
      this.dialogRef.close(newBuyOrder);
    }
  }

}
