import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomeIndexComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'post',
        loadChildren: () =>
          import('./modules/post/post.module').then((m) => m.PostModule),
      },
      {
        path: 'topic',
        loadChildren: () =>
          import('./modules/topic/topic.module').then((m) => m.TopicModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
