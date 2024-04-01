import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {SearchLoanComponent} from "./components/searchLoan/searchLoan.component";
import {SearchLoanPaymentComponent} from "./components/searchLoanPayment/searchLoanPayment.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'searchLoan',
    component : SearchLoanComponent
  },
  {
    path : 'loanPayment',
    component : SearchLoanPaymentComponent
  },
  {
    path : 'loanList',
    component : SearchLoanPaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
