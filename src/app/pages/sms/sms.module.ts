import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import { SmsPageRoutingModule } from './sms-routing.module';

import { SmsPage } from './sms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SmsPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [SmsPage]
})
export class SmsPageModule {}
