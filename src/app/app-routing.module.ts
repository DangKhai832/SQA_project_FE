import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {SearchLoanComponent} from "./components/tìm kiếm trang tạo khoản vay/searchLoan.component";
import {SearchLoanPaymentComponent} from "./components/tìm kiếm trang thanh toán/searchLoanPayment.component";
import {CreateLoanComponent} from "./components/createLoan/createLoan.component";
import {ListLoanComponent} from "./components/listLoan/listLoan.component";


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
    path : 'createLoan/:id',
    component : CreateLoanComponent
  },
  {
    path : 'listLoan/:id',
    component : ListLoanComponent
  },
  // {
  //   path: 'loanList/:id',
  //   component: LoanListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
