import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryAndPaymentComponent } from './delivery-and-payment.component';
import { DeliveryAndPaymentRoutingModule } from './delivery-and-payment-routing.module';


@NgModule({
  declarations: [
    DeliveryAndPaymentComponent
  ],
  imports: [
    CommonModule,
    DeliveryAndPaymentRoutingModule,
    SharedModule
  ]
})
export class DeliveryAndPaymentModule { }
