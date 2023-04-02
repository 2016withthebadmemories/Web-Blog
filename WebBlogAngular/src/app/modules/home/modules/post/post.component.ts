import { PostService } from './../../../../../services/post.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { commentDto } from 'src/app/modules/admin/modules/comment/list-comment/list-comment.component';
import { CommentService } from 'src/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  id: number = 0;
  public post: postDto = {} as postDto;
  public comment: commentDto[] = [];

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService
  ) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(s => {
      this.id = s['id']
      this.getAllComment(this.id);
      this.postService.getPostById(this.id).subscribe(x => {
        this.post = x
      })
    })
  }
  getAllComment(id: number) {
    this.postService.getComment(id).subscribe((rs) => {
      this.comment = rs;
    });
  }
}
export interface postDto {
  id: number,
  title: string,
  content: string,
  authorID: number,
  topicID: number,
  datePosted: string,
  img: string;
}
