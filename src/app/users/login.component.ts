import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
    templateUrl: 'login.component.html',
    selector: 'sl-login',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(private auth: AuthService) { }
    loginData = {
        UserName: '',
        Password: ''
    }

    login() {
        this.auth.login(this.loginData);
        console.log("this.loginData=> ", this.loginData);
    }

}