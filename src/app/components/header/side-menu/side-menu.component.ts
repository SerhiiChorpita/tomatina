import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  closeDialog() {
    this.dialog.closeAll();
  }
}
