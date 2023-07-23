import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthDialogRoutingModule } from './auth-dialog-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthDialogComponent } from './auth-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AuthDialogComponent
  ],
  imports: [
    CommonModule,
    AuthDialogRoutingModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    // DialogService
 ],
})
export class AuthDialogModule { }
