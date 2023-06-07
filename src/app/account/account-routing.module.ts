import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FavoritesComponent } from '../pages/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'personal-data', component: PersonalDataComponent },
      { path: 'order-history', component: OrderHistoryComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: '', pathMatch: 'full', redirectTo: 'personal-data' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
