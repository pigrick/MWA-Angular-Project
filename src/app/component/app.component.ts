import { Component, DoCheck } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styles: []
})
export class AppComponent implements DoCheck {
  title = 'Welcome to Our Website';
  loggedin;

  constructor(private authService:AuthService){}

  ngDoCheck(){
    if(this.authService.loggedIn()){
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
  }
  logout(){
      this.authService.logout();
  }
}
