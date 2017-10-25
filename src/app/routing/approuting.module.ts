import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "../component/welcome.component";
import { UnauthorizedComponent } from "../component/unauthorized.component";
import { LoginComponent } from "../component/login.component";
import { LogoutComponent } from "../component/logout.component";


const route: Routes = [
    {
        path: "",
        component: WelcomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "logout",
        component: LogoutComponent
    },
    {
        path: "unauthorized",
        component: UnauthorizedComponent
    }

]

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}