import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss']
})
export class DeliveryTypeComponent {
  public deliveryType!: boolean | null;


  constructor(
    public dialog: MatDialog,
    public matDialogRef: MatDialogRef<DeliveryTypeComponent>
  ) { }

  ngOnInit(): void {
    this.deliveryType = null;
  }
  closeDialog(result: boolean) {
    this.matDialogRef.beforeClosed().subscribe(() => this.matDialogRef.close(result));
    this.dialog.closeAll();
  }
}
