import { topicDto } from './../../topic/list-topic/list-topic.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { postDto } from 'src/app/modules/home/modules/post/post.component';
import { PostService } from 'src/services/post.service';
import { TopicService } from 'src/services/topic.service';

@Component({
  selector: 'app-create-edit-post',
  templateUrl: './create-edit-post.component.html',
  styleUrls: ['./create-edit-post.component.css'],
})
export class CreateEditPostComponent {
  public post: postDto = {} as postDto;
  topics: topicDto[] = [];

  constructor(
    public matDialogRef: MatDialogRef<CreateEditPostComponent>,
    private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: CreateEditPostDialogData,
    private topicService: TopicService
  ) {}
  ngOnInit() {
    if (this.data?.post?.id) {
      this.post = this.data.post;
    }
    this.getAllTopic();
  }
  getAllTopic() {
    this.topicService.getAllTopic().subscribe((rs) => {
      this.topics = rs;
    });
  }

  close() {
    console.log(this.matDialogRef);
    this.matDialogRef.close();
  }

  create() {
    if (this.post.id) {
      this.postService.editPost(this.post).subscribe((rs) => {
        this.close();
      });
    } else {
      this.postService.createPost(this.post).subscribe((rs) => {
        this.close();
      });
    }
  }

  content = '';
  init = {
    height: 500,
    branding: false,
    plugins:
      'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    toolbar:
      'undo redo | styleselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    image_title: true,
    image_caption: true,
    image_dimensions: false,
    image_class_list: [
      { title: 'None', value: '' },
      { title: 'Responsive', value: 'img-responsive' },
    ],
  };
}

export interface CreateEditPostDialogData {
  post: postDto;
}
