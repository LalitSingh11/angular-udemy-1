import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser!: User;

  onSelectUser(id: string)
  {
    this.selectedUser = this.users.find(user => user.id === id)!;
  }
}
