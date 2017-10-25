import { Component, EventEmitter, OnInit } from '@angular/core';
import { Post, PostType } from '../../../class/post.class';
import { PostService } from '../../../service/post.service';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'postlist',
    templateUrl: './postlist.html',
    styleUrls: []
})
export class PostListUserComponent implements OnInit{
    postlist: Post[];
    constructor(private postService: PostService, private authService: AuthService){
    }

    getPosts():void {
        this.postService.getPosts()
        
        .subscribe(posts => this.postlist = posts.filter(post => post.author == localStorage.getItem('username')).sort((x,y) => {
            if(x.dateCreated > y.dateCreated){
                return -1;
            } else if (x.dateCreated < y.dateCreated){
                return 1;
            } else {
                return 0;
            }
        }));
    }

    ngOnInit():void{
        this.getPosts();
        console.log(localStorage.getItem('username'));
    }
}