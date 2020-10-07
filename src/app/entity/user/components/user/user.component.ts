import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goSomewhere(id: number): void {
    console.log('go somewhere');
    this.router.navigate(['details', id], {
      relativeTo: this.activatedRoute,
      state: {userId: id}
    });
  }
}
