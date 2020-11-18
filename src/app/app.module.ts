import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './services/customer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CreateComponent } from './customer/create/create.component';
import { DetailsComponent } from './customer/details/details.component';
import { UpdateComponent } from './customer/update/update.component';
import { HomeComponent } from './customer/home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './services/helpers/jwt.interceptor';
import { ErrorInterceptor } from './services/helpers/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CreateComponent, 
    DetailsComponent, 
    UpdateComponent, 
    HomeComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [
    CustomerService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
