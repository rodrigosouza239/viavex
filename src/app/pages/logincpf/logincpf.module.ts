import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';


import { LogincpfPageRoutingModule } from './logincpf-routing.module';
import { LogincpfPage } from './logincpf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule,
    NgxMaskModule.forRoot(),
    LogincpfPageRoutingModule
  ],
  declarations: [LogincpfPage]
})
export class LogincpfPageModule {}
