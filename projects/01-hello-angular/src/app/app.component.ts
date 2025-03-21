import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Clean Code - Robert Martin</li>
      <li>Clean Architecture - Robert Martin</li>
      <li>The Pragmatic Programmer - Andy Hunt & Dave Thomas</li>
    </ol>
  `,
  styles: `
    ol {
      list-style-type: upper-roman;
    }
  `,
})
export class AppComponent {}
