import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterhomeselfiePageRoutingModule } from './registerhomeselfie-routing.module';

import { RegisterhomeselfiePage } from './registerhomeselfie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterhomeselfiePageRoutingModule
  ],
  declarations: [RegisterhomeselfiePage]
})
export class RegisterhomeselfiePageModule {}
