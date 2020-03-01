import { Component, OnInit } from '@angular/core';
import {UserStorageServiceService} from "../../user-storage-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  users: User[] = [];

  getUsers() {
    this.userStorage.getUser().subscribe(users => this.users = users);
  }
  removeUser(id: number) {
    this.userStorage.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }

}
