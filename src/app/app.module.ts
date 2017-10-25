import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./routing/approuting.module";
import { WelcomeComponent } from "./welcome.component";
import { UserModule } from "./module/user/user.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    UserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
