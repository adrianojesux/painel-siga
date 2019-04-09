import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import ConstantsUrl from './utils/contantsUrls';
import { HttpClientModule } from '@angular/common/http';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    MasterPageComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConstantsUrl
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
