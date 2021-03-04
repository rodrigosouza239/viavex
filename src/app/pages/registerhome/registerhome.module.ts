import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterhomePageRoutingModule } from './registerhome-routing.module';

import { RegisterhomePage } from './registerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterhomePageRoutingModule
  ],
  declarations: [RegisterhomePage]
})
export class RegisterhomePageModule {}
