import { Component } from '@angular/core';

@Component({
  selector: 'unauthorized',
  template: `
    <div class ="container">
        <h1>{{title}}</h1>
    </div>
  `,
  styles: []
})
export class UnauthorizedComponent {
  title = 'Sorry, you are not authorized to access this page.';
}