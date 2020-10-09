import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataTransferService } from '../../../../entity/user/services/data-transfer.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private dataTransferService: DataTransferService) { }

  goSomewhere(id: number): void {
    console.log('go somewhere');
    this.router.navigate(['details', id], {
      relativeTo: this.activatedRoute,
      state: {userId: id}
    });
  }

  choose(user: User): void {
    console.log('choose this', user);
    console.log(this.dataTransferService.xxx.getValue());
    this.dataTransferService.xxx.next(JSON.stringify(user));
    console.log(this.dataTransferService.xxx.getValue());
  }

  ngOnInit(): void {
  }
}
