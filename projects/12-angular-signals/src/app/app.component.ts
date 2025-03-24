import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    @for (todo of todos(); track $index) {
    <label
      [ngStyle]="{
        'text-decoration': todo.completed ? 'line-through' : 'none'
      }"
      >{{ todo.title }}
      <input
        type="checkbox"
        [checked]="todo.completed"
        (change)="updateTodo(todo)"
      />
    </label>
    }
    <br />
    <p>Completed: {{ completed() }}</p>
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);

  completed = computed(() => this.todos().filter((t) => t.completed).length);

  updateTodo(todo: Todo) {
    this.todos.update((todos) =>
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }
}
