
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { UserRoutingModule } from "../../routing/userrouting.module";

import { UserComponent } from "./component/user.component";
import { UserCreationComponent } from "./component/usercreation.component";
import { UserListComponent } from "./component/userlist.component";
import { UserDetailComponent } from "./component/userdetail.component";
import { UserService } from '../../service/user.service';

@NgModule({
  declarations: [
    UserComponent,
    UserCreationComponent,
    UserListComponent,
    UserDetailComponent

  ],
  exports :[
  ]
  ,
  imports: [
    SharedModule,
    UserRoutingModule
    
  ],
  providers :[UserService]
})
export class UserModule { }