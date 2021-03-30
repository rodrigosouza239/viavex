import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterhomeselfiePage } from './registerhomeselfie.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterhomeselfiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterhomeselfiePageRoutingModule {}
