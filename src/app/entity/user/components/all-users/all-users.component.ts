import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  usersList: User[] = [];

  constructor(/*private userService: UserService,*/
              private activatedRoute: ActivatedRoute) {
    // this.userService.getUsers()
    // .subscribe(value => this.usersList = value);
    this.activatedRoute.data.subscribe(value => console.log(value));

    this.activatedRoute.data.subscribe(value => this.usersList = value.xxx);
  }
}
