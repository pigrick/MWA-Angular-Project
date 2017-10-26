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
        .txt-center {
            text-align: center;
        }

        .hide {
            display: none;
        }

        .clear {
            float: none;
            clear: both;
        }

        .rating {
            font-size: 35pt;
            width: 260px;
            margin-left: auto;
            margin-right: auto;
            unicode-bidi: bidi-override;
            direction: rtl;
            text-align: center;
            position: relative;
        }

        .rating > label {
            float: right;
            display: inline;
            padding: 0;
            margin: 0;
            position: relative;
            width: 1.1em;
            cursor: pointer;
            color: #000;
        }

        .rating > label:hover,
        .rating > label:hover ~ label,
        .rating > input.radio-btn:checked ~ label {
            color: transparent;
        }

        .rating > label:hover:before,
        .rating > label:hover ~ label:before,
        .rating > input.radio-btn:checked ~ label:before,
        .rating > input.radio-btn:checked ~ label:before {
            content: "\\2605";
            position: absolute;
            left: 0;
            color: #FFD700;
        }
    `]
})
export class PostDetailComponent implements OnInit{
    post$: Observable<Post>;
    comment$: Observable<Comment[]>;
    myRating;
    constructor(private postService: PostService, private route: ActivatedRoute,
        private router: Router, private commentService: CommentService) {}

    ngOnInit():void{
        this.post$ = this.route.paramMap.switchMap((params: ParamMap) => this.postService.getPost(params.get('id')));
        this.comment$ = this.route.paramMap.switchMap((params: ParamMap) => this.commentService.getCommentByPost(params.get('id')));
        this.post$.subscribe(post => {
            this.myRating = post.rating.find(us => us.username === this.getLocalUser()).rating;
        });
    }

    deletePost(){
        this.post$.subscribe(post =>{
            this.postService.deletePost(post._id).subscribe(()=> this.router.navigate(['/posts/mylist']));
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

    rate(rate){
        this.post$.subscribe(post => {
            if(post.rating.find(us => us.username == this.getLocalUser())){
                console.log(post.rating.indexOf(post.rating.find(us => us.username === this.getLocalUser())));
                post.rating.splice(post.rating.indexOf(post.rating.find(us => us.username === this.getLocalUser())), 1, {username: this.getLocalUser(),rating: rate });
            } else {
                post.rating.push({username: this.getLocalUser(),rating: rate });
            }
            this.postService.update(post).subscribe(()=> {
                this.myRating = rate;
            });
        })
    }
}