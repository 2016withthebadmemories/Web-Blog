import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { TopicComponent } from './modules/topic/topic.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, HomeIndexComponent, TopicComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
