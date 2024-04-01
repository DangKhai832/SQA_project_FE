import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaiKhoan } from '../Model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "http://103.163.215.125/sqa/api/"
  login: TaiKhoan = new TaiKhoan

  createCustomer(body : object) {
    return this.http.post(this.baseServerUrl + "customer/create", body, {responseType : "json"})
  }

  searchCustomer(key : String) {
    return this.http.get(this.baseServerUrl + "customer/search?key=" + key, {responseType : "json"})
  }

  registerUser(user: Array<string>){
    return this.http.post(this.baseServerUrl + "User/CreateUser", {
      UserName: user[0],
      Email: user[1],
      PhoneNumber: user[2],
      Gender: user[3],
      PassWord: user[4]
    },{responseType: 'text'});
  }

  loginUser(){
    return this.http.post(this.baseServerUrl + 'User/LoginUser', this.login,{responseType: "text"})

    ;
  }

}
