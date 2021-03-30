import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfiecameraPageRoutingModule } from './selfiecamera-routing.module';

import { SelfiecameraPage } from './selfiecamera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfiecameraPageRoutingModule
  ],
  declarations: [SelfiecameraPage]
})
export class SelfiecameraPageModule {}
