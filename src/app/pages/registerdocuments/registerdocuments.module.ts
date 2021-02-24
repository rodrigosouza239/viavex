import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterdocumentsPageRoutingModule } from './registerdocuments-routing.module';

import { RegisterdocumentsPage } from './registerdocuments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterdocumentsPageRoutingModule
  ],
  declarations: [RegisterdocumentsPage]
})
export class RegisterdocumentsPageModule {}
