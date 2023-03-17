import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateYourOwnComponent } from './create-your-own.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateYourOwnRoutingModule } from './create-your-own-routing.module';



@NgModule({
  declarations: [
    CreateYourOwnComponent
  ],
  imports: [
    CommonModule,
    CreateYourOwnRoutingModule,
    SharedModule
  ]
})
export class CreateYourOwnModule { }
