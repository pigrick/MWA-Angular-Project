import { Component, Input, Output ,EventEmitter, OnInit } from '@angular/core';
import { Post, PostType } from '../../../class/post.class';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostService } from "../../../service/post.service";
import { Router } from '@angular/router';

@Component({
    selector: 'post-creation',
    templateUrl: './postcreation.html',
    providers:[]
})
export class PostCreationComponent implements OnInit{
    //user: user = new user();
    postCreationForm: FormGroup;

    constructor(private fb: FormBuilder, private postService: PostService, private router: Router){}

    ngOnInit(){
        this.postCreationForm = this.fb.group({
            title: ['', [Validators.required]],
            content:[],
            author:[],
            dateCreated:[]
        })
    }

    create(form:NgForm){
        form.value.dateCreated = new Date();
        this.postService.createPost(form.value).subscribe(()=>{ 
            alert('Create Success!');
            this.router.navigate(['/posts']);
        });
    }

    get title(){
        return this.postCreationForm.get('title');
    }
    get content(){
        return this.postCreationForm.get('content');
    }
    get author(){
        return this.postCreationForm.get('author');
    }
}