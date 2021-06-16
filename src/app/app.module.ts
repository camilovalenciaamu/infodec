import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from "@modules/auth/login/login.module";
import { RegisterPageModule } from "@modules/auth/register/register.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    LoginPageModule,
    RegisterPageModule,
    SharedModule,
    CoreModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
