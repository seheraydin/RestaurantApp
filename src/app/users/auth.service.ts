import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  Token_Key = "token";
  Name_Key = "name";

  get isAuthenticated() {
    return !!localStorage.getItem(this.Token_Key);
  }

  logout() {
    localStorage.removeItem(this.Token_Key);
    localStorage.removeItem(this.Name_Key);
  }

  login(loginData: any) {
    this.http.post(environment.apiUrl + '/api/auth/login', loginData)
      .subscribe((res: any) => {
        var authResponse = res;
        if (authResponse != null) {
          localStorage.setItem(this.Token_Key, authResponse.token);
          localStorage.setItem(this.Name_Key, authResponse.username);
          console.log(localStorage.getItem(this.Token_Key));
          this.router.navigate(['/']);
        }
      });
  }

  register(user: any) {
    delete user.confirmPassword;
    this.http.post(environment.apiUrl + '/api/auth/register', user)
      .subscribe(res  => {
        console.log("res =>",res);
        var authResponse = res;
        console.log("authResponse=>",authResponse);
          // localStorage.setItem(this.Token_Key, authResponse.result.token);
          // localStorage.setItem(this.Name_Key, authResponse.result.username);
          console.log(localStorage.getItem(this.Token_Key));
          this.router.navigate(['/']);
      
      });
  }

}
