import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth/auth.guard';

import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: 'product', component: AdminProductComponent },
      { path: 'category', component: AdminCategoryComponent },
      { path: 'orders', component: AdminOrdersComponent },
      { path: '', pathMatch: 'full', redirectTo: 'admin-product' }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
