import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product.component';
import { BreakfastsComponent } from './breakfasts/breakfasts.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FitSandwichesComponent } from './fit-sandwiches/fit-sandwiches.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SaladPastsComponent } from './salad-pasts/salad-pasts.component';
import { SaladsComponent } from './salads/salads.component';
import { SoupsComponent } from './soups/soups.component';
import { WeeklySpecialComponent } from './weekly-special/weekly-special.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    BreakfastsComponent,
    DessertsComponent,
    DrinksComponent,
    FitSandwichesComponent,
    ProductInfoComponent,
    SaladPastsComponent,
    SaladsComponent,
    SoupsComponent,
    WeeklySpecialComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
