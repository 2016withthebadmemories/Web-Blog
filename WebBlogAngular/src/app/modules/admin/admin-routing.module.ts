import { PostModule } from './../home/modules/post/post.module';
import { ListPostComponent } from './modules/post/list-post/list-post.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "topic",
        loadChildren: () => import("./modules/topic/topic.module").then(m => m.TopicModule)
      },
      {
        path: "comment",
        loadChildren: () => import("./modules/comment/comment.module").then(m => m.CommentModule)
      },
      {
        path: "post",
        loadChildren: () => import("./modules/post/post.module").then(m => m.PostModule)
      }
    ]
  },
  {
    path: "login",
    loadChildren: () => 
      import('./modules/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
