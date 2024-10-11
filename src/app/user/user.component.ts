import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[0];
  imagePath = "../../assests/users/" + this.selectedUser.avatar;

  user = input.required<User>();
  selected = input<boolean>();
  @Output() select = new EventEmitter();

  onSelectUser()
  {
    this.select.emit(this.user().id);
  } 
}
