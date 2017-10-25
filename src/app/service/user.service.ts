import { Injectable } from '@angular/core';
import { User } from '../class/user.class';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserService{
    constructor(private http: HttpClient){}
    
    getUsers():Observable<User[]> {
        return this.http.get<User[]>('http://localhost:3000/users');
    }

    deleteUser(username:String){
        return this.http.delete('http://localhost:3000/users/delete/' + username);
    }

    getUser(username):Observable<User>{
        return this.http.get<User[]>('http://localhost:3000/users').mergeMap(user => user).filter(user => user.username === username);
    }

    createUser(user: User){
        return this.http.post('http://localhost:3000/users/create', user);
    }
}