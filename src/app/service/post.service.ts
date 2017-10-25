import { Injectable } from '@angular/core';
import { Post } from '../class/post.class';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PostService{
    constructor(private http: HttpClient){}
    
    getPosts():Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:3000/posts');
    }

    deletePost(id:String){
        return this.http.delete('http://localhost:3000/posts/delete/' + id);
    }

    getPost(id: String):Observable<Post>{
        return this.http.get<Post[]>('http://localhost:3000/posts').mergeMap(post => post).filter(post => post._id === id);
    }

    createPost(post: Post){
        return this.http.post('http://localhost:3000/posts/create', post);
    }
}