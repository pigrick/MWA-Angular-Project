import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class ="container">
        <h1>{{title}}</h1>
    </div>
  `,
  styles: []
})
export class WelcomeComponent {
  title = 'app';
}