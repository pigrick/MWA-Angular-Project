import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
interface Credentials { username: string, password: string }
@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    credentials: Credentials;
    constructor(private auth: AuthService) { }
    onLogin(credentials) {
        this.auth.login(credentials);
    }
}