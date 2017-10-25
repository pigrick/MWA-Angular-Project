import { Component, EventEmitter, OnInit } from '@angular/core';
import { Post, PostType } from '../../../class/post.class';
import { PostService } from '../../../service/post.service';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'postlist',
    templateUrl: './postlist.html',
    styleUrls: []
})
export class PostListComponent implements OnInit{
    postlist: Post[];
    constructor(private postService: PostService){
    }

    getPosts():void {
        this.postService.getPosts()
        .subscribe(posts => this.postlist = posts.sort((x,y) => {
            if(x.dateCreated > y.dateCreated){
                return 1;
            } else if (x.dateCreated < y.dateCreated){
                return -1;
            } else {
                return 0;
            }
        }));
    }

    ngOnInit():void{
        this.getPosts();
    }
}