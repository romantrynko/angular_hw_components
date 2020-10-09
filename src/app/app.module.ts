import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './modules/user/components/user/user.component';
import { RouterModule } from '@angular/router';

import { UserResolveService } from './modules/user/services/user-resolve.service';
// import { AllPostsComponent } from './entity/user/components/all-posts/all-posts.component';
// import { PostComponent } from './entity/user/components/post/post.component';
// import { CommentComponent } from './entity/user/components/comment/comment.component';
// import { AllCommentsComponent } from './entity/user/components/all-comments/all-comments.component';
// import { PostResolveService } from './entity/user/services/post-resolve.service';
import { UserDetailsComponent } from './entity/user/components/user-details/user-details.component';
import { UserDetails2Component } from './entity/user/components/user-details2/user-details2.component';
import { UserDetails3Component } from './entity/user/components/user-details3/user-details3.component';
import { PostModule } from './modules/post/post.module';
import { AllPostsComponent } from './modules/post/components/all-posts/all-posts.component';
import { AllUsersComponent } from './modules/user/components/all-users/all-users.component';
import { UserModule } from './modules/user/user.module';
import { CommentModule } from './modules/comment/comment.module';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    // AllUsersComponent,
    // AllPostsComponent,
    // CommentComponent,
    // AllCommentsComponent,
    UserDetailsComponent,
    UserDetails2Component,
    UserDetails3Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    // PostModule,
    RouterModule.forRoot([
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(m => m.CommentModule)},
    ]),
    // CommentModule
    // UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
