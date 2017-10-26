import { Component, EventEmitter, OnInit } from '@angular/core';
import { Post, PostType } from '../../../class/post.class';
import { PostService } from '../../../service/post.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { DatePipe } from '@angular/common';

@Component({
    selector: 'postdetail',
    templateUrl: './postdetail.html',
    styleUrls: []
})
export class PostDetailComponent implements OnInit{
    post$: Observable<Post>;
    constructor(private postService: PostService, private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit():void{
        this.post$ = this.route.paramMap.switchMap((params: ParamMap) => this.postService.getPost(params.get('id')));
    }

    deletepost(){
        this.post$.subscribe(post =>{
            this.postService.deletePost(post._id).subscribe(()=> this.router.navigate(['/posts']));
        });
    }
}