import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageenderecoPage } from './pageendereco.page';

const routes: Routes = [
  {
    path: '',
    component: PageenderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageenderecoPageRoutingModule {}
