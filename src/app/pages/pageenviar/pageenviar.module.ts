import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageenviarPageRoutingModule } from './pageenviar-routing.module';

import { PageenviarPage } from './pageenviar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageenviarPageRoutingModule
  ],
  declarations: [PageenviarPage]
})
export class PageenviarPageModule {}
