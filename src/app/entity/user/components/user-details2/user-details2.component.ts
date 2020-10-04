import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details2',
  templateUrl: './user-details2.component.html',
  styleUrls: ['./user-details2.component.css']
})
export class UserDetails2Component implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe(value => {
      console.log(this.router.getCurrentNavigation().extras.state);
      console.log(history.state);

    });

   }

  ngOnInit(): void {
  }

}
