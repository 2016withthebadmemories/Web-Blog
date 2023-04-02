import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicComponent } from './topic.component';

const routes: Routes = [
  {
    path: ":id",
    component: TopicComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
