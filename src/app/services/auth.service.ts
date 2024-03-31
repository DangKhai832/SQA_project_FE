import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaiKhoan } from '../Model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7019/api/"
  login: TaiKhoan = new TaiKhoan

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
