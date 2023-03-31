import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataComponent } from './dialog-data/dialog-data.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public deliveryType: string = 'Self-pickup';

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogDataComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
