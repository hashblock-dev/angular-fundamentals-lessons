import { Component, inject } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserService } from './user.service';
import { User } from './data';

@Component({
  imports: [UserInfoComponent],
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>User Listing</h1>
    @for (user of userData; track $index) {
    <app-user-info [user]="user" />
    }
  `,
})
export class AppComponent {
  userService = inject(UserService);
  userData: User[] = [];

  constructor() {
    this.userService.getUserData().then((data) => {
      this.userData = data;
    });
  }
}
