import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../../class/user.class';
import { UserService } from '../../../service/user.service';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'userlist',
    templateUrl: './userlist.html',
    styleUrls: []
})
export class UserListComponent implements OnInit{
    userlist: User[];
    constructor(private userService: UserService){
    }

    getUsers():void {
        this.userService.getUsers()
        .subscribe(users => this.userlist = users.sort((x,y) => {
            if(x.username > y.username){
                return 1;
            } else if (x.username < y.username){
                return -1;
            } else {
                return 0;
            }
        }));
    }

    ngOnInit():void{
        this.getUsers();
    }
}
