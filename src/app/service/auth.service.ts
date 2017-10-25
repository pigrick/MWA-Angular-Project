import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }
    
    login(credentials) {
        this.http.post('http://localhost:3000/login', credentials)
            .subscribe(
            data => localStorage.setItem('token', data['token']),
            error => console.log(error));
    }
    loggedIn() {
        //return tokenNotExpired();
        return  localStorage.getItem('token');
    }
    logout() { 
        localStorage.removeItem('token'); 
    }
}