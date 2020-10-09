import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: AllUsersComponent }
    ]),
  ],
  providers: [UserService]
})
export class UserModule { }
