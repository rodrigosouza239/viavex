import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterdocumentsPage } from './registerdocuments.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterdocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterdocumentsPageRoutingModule {}
