import { CommentRoutingModule } from './comment-routing.module';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from '../topic/topic-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class CommentModule { }
