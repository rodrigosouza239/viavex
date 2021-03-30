import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageenderecoPageRoutingModule } from './pageendereco-routing.module';

import { PageenderecoPage } from './pageendereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PageenderecoPageRoutingModule
  ],
  declarations: [PageenderecoPage]
})
export class PageenderecoPageModule {}
