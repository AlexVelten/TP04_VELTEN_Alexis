import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { Client } from './models/client';
import { Pipe } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { PhonePipe } from './phone.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormValidationsComponent,
    FormCustomerComponent,
    PhonePipe,
    ProductsComponent,
    ProductsFilterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
