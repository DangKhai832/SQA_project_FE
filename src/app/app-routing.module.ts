import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateLoanComponent} from "./components/createLoan/createLoan.component";

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
    path : 'createLoan',
    component : CreateLoanComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
