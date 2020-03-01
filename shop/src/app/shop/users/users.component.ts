import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  users: User[] = [];

  getUsers() {
    this.httpClient.getUser().subscribe(users => this.users = users);
  }
  removeUser(id: number) {
    this.httpClient.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }

}
