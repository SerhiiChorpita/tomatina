import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateYourOwnComponent } from './create-your-own.component';

const routes: Routes = [
  {
    path: '',
    component: CreateYourOwnComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateYourOwnRoutingModule { }
