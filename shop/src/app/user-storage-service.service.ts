import { Injectable } from '@angular/core';
import {User} from "./shop/users/User";
import {Observable, of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserStorageServiceService {

  constructor() { }
  private users: User[] = [
    {id: 1, login: 'Adam', email: 'jakis@mail', age: 34, country: 'USA', active: true},
    {id: 2, login: 'Krzysztof', email: 'jakis_inny@mail', age: 44, country: 'Poland', active: false},

  ];

  getUser(): Observable<User[]> {
    return of(this.users);
  }
  removeUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(userIndex, 1);
  }
  private idCount: number = 3;

  saveUser(user: User) {
    // product.id = this.idCount;
    // this.products.push(product);
    // this.idCount++;
    if (user.id) {
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }
  getUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }

}

