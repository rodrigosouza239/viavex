import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationsmsPageRoutingModule } from './validationsms-routing.module';

import { ValidationsmsPage } from './validationsms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ValidationsmsPageRoutingModule
  ],
  declarations: [ValidationsmsPage]
})
export class ValidationsmsPageModule {}
