import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterhomeenviarPageRoutingModule } from './registerhomeenviar-routing.module';

import { RegisterhomeenviarPage } from './registerhomeenviar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterhomeenviarPageRoutingModule
  ],
  declarations: [RegisterhomeenviarPage]
})
export class RegisterhomeenviarPageModule {}
