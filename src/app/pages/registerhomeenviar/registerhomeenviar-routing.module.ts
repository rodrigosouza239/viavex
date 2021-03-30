import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterhomeenviarPage } from './registerhomeenviar.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterhomeenviarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterhomeenviarPageRoutingModule {}
