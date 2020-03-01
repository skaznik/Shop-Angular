import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {UserStorageService} from "../../../user-storage-service.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-editor-user',
  templateUrl: './editor-user.component.html',
  styleUrls: ['./editor-user.component.css']
})
export class EditorUserComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserToEdit();
  }
  user: User = new User();

  saveUser(product: User) {
    this.userStorage.saveUser(user).subscribe(r => {
      this.router.navigate(['/shop']);
    });
  }
  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.userStorage.getProduct(Number.parseInt(id)).subscribe(p => this.user = p);
      }
    })
  }
}
