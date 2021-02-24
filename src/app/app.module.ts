import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
      IonicStorageModule.forRoot(),
      NgxMaskModule.forRoot(), 
    ],
  providers: [{
     provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
     }],
  bootstrap: [AppComponent],
})
export class AppModule {}
