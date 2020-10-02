import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './entity/user/components/user/user.component';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './entity/user/components/all-users/all-users.component';
import { UserResolveService } from './entity/user/services/user-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent
  ],
  imports: [
  AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, resolve: {xxx: UserResolveService}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
