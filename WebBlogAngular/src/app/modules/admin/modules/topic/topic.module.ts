import { FormsModule } from '@angular/forms';
import { TopicRoutingModule } from './topic-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTopicComponent } from './list-topic/list-topic.component';
import { CreateEditTopicComponent } from './create-edit-topic/create-edit-topic.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule}from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ListTopicComponent,
    CreateEditTopicComponent
  ],
  imports: [
    CommonModule,
    TopicRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: []
})
export class TopicModule { }
