import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterhomePage } from './registerhome.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterhomePageRoutingModule {}
