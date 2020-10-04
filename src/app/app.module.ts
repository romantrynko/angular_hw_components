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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    PostComponent,
    CommentComponent,
    AllCommentsComponent
  ],
  imports: [
AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, resolve: {xxx: UserResolveService}},
      {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolveService}},
      {path: 'comments', component: AllCommentsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
