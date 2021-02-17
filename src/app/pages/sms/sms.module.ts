import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsPageRoutingModule } from './sms-routing.module';

import { SmsPage } from './sms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SmsPageRoutingModule
  ],
  declarations: [SmsPage]
})
export class SmsPageModule {}
