import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaPageRoutingModule } from './senha-routing.module';

import { SenhaPage } from './senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SenhaPageRoutingModule
  ],
  declarations: [SenhaPage]
})
export class SenhaPageModule {}
