import { Component } from '@angular/core';

@Component({
  selector: 'post-root',
  template: `
    <div class ="container">
        <h1>{{title}}</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PostComponent {
  title = 'Post Page';
}