import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationsmsPage } from './validationsms.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationsmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationsmsPageRoutingModule {}
