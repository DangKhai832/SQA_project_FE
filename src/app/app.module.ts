import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {DropdownModule} from "primeng/dropdown";
import {SearchLoanComponent} from "./components/searchLoan/searchLoan.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {SearchLoanPaymentComponent} from "./components/searchLoanPayment/searchLoanPayment.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    SearchLoanComponent,
    SearchLoanPaymentComponent,
    // LoanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    DropdownModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
