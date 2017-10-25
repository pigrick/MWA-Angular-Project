
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { PostRoutingModule } from "../../routing/postrouting.module";

import { PostComponent } from "./component/post.component";
import { PostCreationComponent } from "./component/postcreation.component";
import { PostListComponent } from "./component/postlist.component";
import { PostDetailComponent } from "./component/postdetail.component";
import { PostService } from '../../service/post.service';

@NgModule({
  declarations: [
    PostComponent,
    PostCreationComponent,
    PostListComponent,
    PostDetailComponent

  ],
  exports :[
  ]
  ,
  imports: [
    SharedModule,
    PostRoutingModule
    
  ],
  providers :[PostService]
})
export class PostModule { }