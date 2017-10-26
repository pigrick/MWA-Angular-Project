import { Component, Input, Output ,EventEmitter, OnInit } from '@angular/core';
import { User } from '../../../class/user.class';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from "../../../service/user.service";
import { UserValidators } from "../../../validator/user.validator";
import { Router } from '@angular/router';
import { AuthService } from "../../../service/auth.service";

@Component({
    selector: 'user-creation',
    templateUrl: './usercreation.html',
    providers:[UserValidators]
})
export class UserCreationComponent implements OnInit{
    //user: user = new user();
    userCreationForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private authService: AuthService){}

    ngOnInit(){
        this.userCreationForm = this.fb.group({
            username: ['', [Validators.required], UserValidators.uniqueUsername(this.userService)],
            password:['', [Validators.required]],
            email:['', [Validators.required], UserValidators.uniqueEmail(this.userService)],
            DOB:['', [Validators.required]],
            firstname:['', [Validators.required]],
            lastname:['', [Validators.required]],
            authorization: ['normal']
        })
    }

    create(form:NgForm){
        form.value.authorization 
        this.userService.createUser(form.value).subscribe(()=>{ 
            alert('Create Success!');
            this.authService.logout();
            this.authService.login({username: form.value.username, password: form.value.password})
            //this.router.navigate(['/users']);
        });
    }
    userValid(){
        return this.userCreationForm.valid;
    }

    get username(){
        return this.userCreationForm.get('username');
    }
    get password(){
        return this.userCreationForm.get('password');
    }
    get email(){
        return this.userCreationForm.get('email');
    }
    get DOB(){
        return this.userCreationForm.get('DOB');
    }
    get firstname(){
        return this.userCreationForm.get('firstname');
    }
    get lastname(){
        return this.userCreationForm.get('lastname');
    }
}