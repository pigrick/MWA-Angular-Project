import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class ="container">
        <h1>{{title}}</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserComponent {
  title = 'User Page';
}