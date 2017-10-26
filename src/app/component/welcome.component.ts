import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class ="container">
        <h1>{{title}}</h1>
        <img src = "../../assets/images/welcom.png">
    </div>
  `,
  styles: [`.h1 {
        text-align: center;
        text-color: royalblue;
        text-size: 20pt;
  }`]
})
export class WelcomeComponent {
  title = 'Welcome to Penagrapher! Please sign in!';
}