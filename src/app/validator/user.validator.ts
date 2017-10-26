import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../class/user.class';

export class UserValidators{

    static uniqueUsername(userService: UserService) {
        return (control : AbstractControl) => {
            return userService.getUser(control.value as string).map(user => {
                if(user.username === control.value as string){
                    return false;
                } else {
                    return true;
                }
            })
                .map(res=>{
                    return res ? null : {uniqueUsername: true};
                });
        };
    }

    static uniqueEmail(userService: UserService) {
        return (control : AbstractControl) => {
            return userService.getUserByEmail(control.value as string).map(user => {
                if(user.email === control.value as string){
                    return false;
                } else {
                    return true;
                }
            })
                .map(res=>{
                    return res ? null : {uniqueEmail: true};
                });
        };
    }
}