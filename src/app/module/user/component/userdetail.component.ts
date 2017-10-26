import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../../class/user.class';
import { UserService } from '../../../service/user.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'userdetail',
    templateUrl: './userdetail.html',
    styleUrls: []
})
export class UserDetailComponent implements OnInit{
    user$: Observable<User>;
    user: User;
    constructor(private userService: UserService, private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit():void{
        if(localStorage.getItem('authorization') === 'admin'){
            this.user$ = this.route.paramMap.switchMap((params: ParamMap) => this.userService.getUser(params.get('username')));
        } else {
            this.user$ = this.userService.getUser(localStorage.getItem('username'));
        }
    }

    deleteUser(){
        this.user$.subscribe(user =>{
            this.userService.deleteUser(user.username).subscribe(()=> this.router.navigate(['/users']));
        });
    }
}