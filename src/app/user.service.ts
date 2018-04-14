import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserService {
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient) { }
    onRegisterUser(user) {
      return this.http.post<any>(this._registerUrl, user);
    }
    onLoginUser(user){
      return this.http.post<any>(this._loginUrl, user);
    }
}
