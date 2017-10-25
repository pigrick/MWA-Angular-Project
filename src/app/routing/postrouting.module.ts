import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from "../module/post/component/post.component";
import { PostCreationComponent } from "../module/post/component/postcreation.component";
import { PostListComponent } from '../module/post/component/postlist.component';
import { PostDetailComponent } from "../module/post/component/postdetail.component";

const postRoute: Routes = [
    {
        path: 'posts',
        component: PostComponent,
        children: [
            {
                path: "",
                component: PostListComponent
            },
            {
                path: "create",
                component: PostCreationComponent
            },
            {
                path: ":id",
                component: PostDetailComponent
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(postRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class PostRoutingModule{}