import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }
    canActivate() {
        if (this.auth.loggedIn() && localStorage.getItem('authorization') === 'admin') {
            return true;
        } else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }
    }
}