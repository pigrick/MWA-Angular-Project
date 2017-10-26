import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "../module/user/component/user.component";
import { UserCreationComponent } from "../module/user/component/usercreation.component";
import { UserListComponent } from '../module/user/component/userlist.component';
import { UserDetailComponent } from "../module/user/component/userdetail.component";
import { AuthGuard } from "../routing/guard/authguard.guard";
import { AdminGuard } from "./guard/adminguard.guard";

const userRoute: Routes = [
    {
        path: 'users',
        component: UserComponent,
        children: [
            {
                path: "",
                component: UserListComponent,
                canActivate: [AdminGuard]
            },
            {
                path: "create",
                component: UserCreationComponent
            },
            {
                path: "profile",
                component: UserDetailComponent,
                canActivate: [AuthGuard]
            }, 
            {
                path: ":username",
                component: UserDetailComponent
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(userRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class UserRoutingModule{}