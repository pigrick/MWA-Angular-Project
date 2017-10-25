import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


interface Credentials { username: string, password: string }
@Component({
    selector: 'logout',
    template: ``
})
export class LogoutComponent implements OnInit {
    constructor(private authService:AuthService, private router: Router){}

    logout(){
        this.authService.logout();
    }

    ngOnInit(){
        this.logout();
        this.router.navigate(['/login']);

    }
}