
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { PostRoutingModule } from "../../routing/postrouting.module";

import { PostComponent } from "./component/post.component";
import { PostCreationComponent } from "./component/postcreation.component";
import { PostListComponent } from "./component/postlist.component";
import { PostListUserComponent } from "./component/postlistuser.component";
import { PostDetailComponent } from "./component/postdetail.component";
import { PostService } from '../../service/post.service';
import { CommentService } from '../../service/comment.service';
import {ColorsDirective} from "../../directive/colors.directive";
import {CalculateRating} from "../../pipe/calculateRating.pipe";
@NgModule({
  declarations: [
    PostComponent,
    PostCreationComponent,
    PostListComponent,
    PostListUserComponent,
    PostDetailComponent,
    ColorsDirective,
    CalculateRating

  ],
  exports :[
  ]
  ,
  imports: [
    SharedModule,
    PostRoutingModule
  ],
  providers :[PostService, CommentService]
})
export class PostModule { }