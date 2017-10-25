import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from "../module/post/component/post.component";
import { PostCreationComponent } from "../module/post/component/postcreation.component";
import { PostListComponent } from '../module/post/component/postlist.component';
import { PostListUserComponent } from '../module/post/component/postlistuser.component';
import { PostDetailComponent } from "../module/post/component/postdetail.component";
import { AuthGuard } from "./guard/authguard.guard";

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
                path: "mylist",
                component: PostListUserComponent,
                canActivate: [AuthGuard]
            },
            {
                path: "create",
                component: PostCreationComponent,
                canActivate: [AuthGuard]
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