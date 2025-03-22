import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input type="text" id="title" name="title" [(ngModel)]="title" />

        <label for="body">Post Body</label>
        <textarea id="body" name="body" [(ngModel)]="body"></textarea>
      </section>
      <section>
        <p>Display title : {{ title }}</p>
        <p>Display value : {{ body }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
  body = 'This is the body of the post';
}
