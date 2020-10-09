import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details3',
  templateUrl: './user-details3.component.html',
  styleUrls: ['./user-details3.component.css']
})
export class UserDetails3Component implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(value => {
      console.log(value);
    });
   }

  ngOnInit(): void {
  }

}
