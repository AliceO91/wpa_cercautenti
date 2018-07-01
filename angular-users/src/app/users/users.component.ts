import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user1: User = {
    id: 1,
    nomeCompleto: 'Windstorm',
    avatar: ''
  };
  
  users = USERS;
  
  selectedUser: User;

  searchText;

  //userFilterPipe = UserFilterPipe;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
