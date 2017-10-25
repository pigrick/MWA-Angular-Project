import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "../welcome.component";


const route: Routes = [
    {
        path: "",
        component: WelcomeComponent
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