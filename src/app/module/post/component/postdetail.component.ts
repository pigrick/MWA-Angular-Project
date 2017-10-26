import { Component, EventEmitter, OnInit } from '@angular/core';
import { Post, PostType } from '../../../class/post.class';
import { Comment } from '../../../class/comment.class';
import { PostService } from '../../../service/post.service';
import { CommentService } from '../../../service/comment.service';
import { Observable } from 'rxjs/Observable';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'postdetail',
    templateUrl: './postdetail.html',
    styles: [`
    `]
})
export class PostDetailComponent implements OnInit{
    post$: Observable<Post>;
    comment$: Observable<Comment[]>;
    constructor(private postService: PostService, private route: ActivatedRoute,
        private router: Router, private commentService: CommentService) {}

    ngOnInit():void{
        this.post$ = this.route.paramMap.switchMap((params: ParamMap) => this.postService.getPost(params.get('id')));
        this.comment$ = this.route.paramMap.switchMap((params: ParamMap) => this.commentService.getCommentByPost(params.get('id')));
    }

    deletePost(){
        this.post$.subscribe(post =>{
            this.postService.deletePost(post._id).subscribe(()=> this.router.navigate(['/posts']));
        });
    }

    getType(type: number):any{
        return PostType[type];
    }

    getLocalUser(){
        return localStorage.getItem('username');
    }

    submitComment(form: NgForm){
        let post_id = this.route.snapshot.paramMap.get('id');
        form.value.post_id = post_id;
        this.commentService.createComment(form.value).subscribe(() => {
            this.comment$ = this.commentService.getCommentByPost(this.route.snapshot.paramMap.get('id'));
        });        
    }
    deleteComment(id){
        this.commentService.deleteComment(id).subscribe(() => {
            this.comment$ = this.commentService.getCommentByPost(this.route.snapshot.paramMap.get('id'));
        });
    }
}