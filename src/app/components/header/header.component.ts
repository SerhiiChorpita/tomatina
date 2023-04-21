import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public deliveryType: string = 'Self-pickup';

  constructor(public dialog: MatDialog) { }

  openDialogData() {
    this.dialog.open(DialogDataComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      autoFocus: false
    });
  }
  openSideMenu() {
    this.dialog.open(SideMenuComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'side-dialog',
      autoFocus: false,
      position: {
        top: '0px',
        right: '0px'
      }
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
