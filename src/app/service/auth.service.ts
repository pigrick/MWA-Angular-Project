import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }

    login(credentials) {
        this.http.post('http://localhost:3000/users/login', credentials)
            .subscribe(
            data =>{
                localStorage.setItem('token', data['token']);
                localStorage.setItem('username', data['username']);
                localStorage.setItem('authorization', data['authorization']);
                this.router.navigate(['/posts']);
            },
            error => {
                console.log(error.error.message);
                if(error.error.message == 'no such user found'){
                    alert("User not Found!");
                } else if (error.error.message == 'passwords did not match'){
                    alert("Password does not match!")
                }
            });
    }
    loggedIn() {
        //return tokenNotExpired();
        return  localStorage.getItem('token');
    }
    logout() { 
        localStorage.removeItem('token'); 
        localStorage.removeItem('username');
        localStorage.removeItem('authorization')
    }
}