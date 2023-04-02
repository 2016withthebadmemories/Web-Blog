import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule}from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ListPostComponent } from './list-post/list-post.component';
import { PostRoutingModule } from './post-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CreateEditPostComponent } from './create-edit-post/create-edit-post.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ListPostComponent,
    CreateEditPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatDialogModule,
    EditorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: []
})
export class PostModule { }
