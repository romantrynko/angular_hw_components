import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './entity/user/components/user/user.component';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './entity/user/components/all-users/all-users.component';
import { UserResolveService } from './entity/user/services/user-resolve.service';
import { AllPostsComponent } from './entity/user/components/all-posts/all-posts.component';
import { PostComponent } from './entity/user/components/post/post.component';
import { CommentComponent } from './entity/user/components/comment/comment.component';
import { AllCommentsComponent } from './entity/user/components/all-comments/all-comments.component';
import { PostResolveService } from './entity/user/services/post-resolve.service';
import { UserDetailsComponent } from './entity/user/components/user-details/user-details.component';
import { UserDetails2Component } from './entity/user/components/user-details2/user-details2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    PostComponent,
    CommentComponent,
    AllCommentsComponent,
    UserDetailsComponent,
    UserDetails2Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // /users
      {path: 'users', component: AllUsersComponent, resolve: {xxx: UserResolveService},
    children: [
      // users/details
      // {path: 'details/:id', component: UserDetailsComponent}
      {path: 'details/:id', component: UserDetails2Component}
    ]},
      // {path: 'users/details/:id', component: UserComponent},
      {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolveService}},
      {path: 'comments', component: AllCommentsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
