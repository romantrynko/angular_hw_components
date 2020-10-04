import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activetedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activetedRoute.params.subscribe((params) => {
      this.userService.getUsersbyId(params.id).subscribe(value => console.log(value));
    });
   }

  ngOnInit(): void {
  }

}
