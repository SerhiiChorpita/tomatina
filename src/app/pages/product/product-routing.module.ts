import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { BreakfastsComponent } from './breakfasts/breakfasts.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FitSandwichesComponent } from './fit-sandwiches/fit-sandwiches.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductInfoResolver } from 'src/app/shared/services/product-info.resolver';
import { SaladPastsComponent } from './salad-pasts/salad-pasts.component';
import { SaladsComponent } from './salads/salads.component';
import { SoupsComponent } from './soups/soups.component';
import { WeeklySpecialComponent } from './weekly-special/weekly-special.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'breakfasts',
    component: BreakfastsComponent
  },
  {
    path: 'desserts',
    component: DessertsComponent
  },
  {
    path: 'drinks',
    component: DrinksComponent
  },
  {
    path: 'fit-sandwiches',
    component: FitSandwichesComponent
  },
  {
    path: 'salad-pasts',
    component: SaladPastsComponent
  },
  {
    path: 'salads',
    component: SaladsComponent
  },
  {
    path: 'soups',
    component: SoupsComponent
  },
  {
    path: 'weekly-special',
    component: WeeklySpecialComponent
  },
  {
    path: ':id',
    component: ProductInfoComponent,
    resolve: {
      productInfo: ProductInfoResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
