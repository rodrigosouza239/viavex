import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageenviarPage } from './pageenviar.page';

const routes: Routes = [
  {
    path: '',
    component: PageenviarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageenviarPageRoutingModule {}
