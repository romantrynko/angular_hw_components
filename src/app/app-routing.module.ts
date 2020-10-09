import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'post', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
                        // {path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
                        // {path: 'comment', loadChildren: () => import('./modules/comment/comment.module').then(m => m.CommentModule)}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
