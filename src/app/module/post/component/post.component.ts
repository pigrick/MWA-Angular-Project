import { Component } from '@angular/core';

@Component({
  selector: 'post-root',
  template: `
    <div class ="container">
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    </div>
    <!--<router-outlet></router-outlet>-->
  `,
  styles: [`.container {
      background-image: url("../../assets/images/background.png");
      width:100%;
      hight: 100%;
      
      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  body, html {
      height: 100%;
  }
  `]
})
export class PostComponent {
  title = 'Post Page';
}