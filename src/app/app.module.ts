import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { AppComponent } from './component/app.component';
import { AppRoutingModule } from "./routing/approuting.module";
import { WelcomeComponent } from "./component/welcome.component";
import { UserModule } from "./module/user/user.module";
import { PostModule } from "./module/post/post.module";
import { UnauthorizedComponent } from "./component/unauthorized.component";
import { LoginComponent } from "./component/login.component";
import { LogoutComponent } from "./component/logout.component";

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from "./service/auth.service";
import { AuthInterceptor } from "./interceptor/auth.interceptor";
import { AuthGuard } from "./routing/guard/authguard.guard";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UnauthorizedComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    UserModule,
    PostModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
