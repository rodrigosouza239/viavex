import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogincpfPage } from './logincpf.page';

const routes: Routes = [
  {
    path: '',
    component: LogincpfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogincpfPageRoutingModule {}
