import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent {
  constructor(
    public dialog: MatDialog
  ) { }

  closeDialog() {
    this.dialog.closeAll();
  }
}
