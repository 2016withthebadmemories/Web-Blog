import { TopicService } from 'src/services/topic.service';
import { PostService } from './../../../services/post.service';
import { Component } from '@angular/core';
import { topicDto } from '../admin/modules/topic/list-topic/list-topic.component';
import { postDto } from './modules/post/post.component';
import { CommentService } from 'src/services/comment.service';
import { commentDto } from '../admin/modules/comment/list-comment/list-comment.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public topic: topicDto[] = [];
  public post: postDto[] = [];
  public comment: commentDto[] = [];
  public searchText = ""
  constructor(
    private postService: PostService,
    private topicService: TopicService,
    private commentService: CommentService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.getAllPost();
    this.getAllTopic();
  }
  getAllPost() {
    this.postService.getAllPost().subscribe(rs => {
      this.post = rs
    })
  }
  getAllTopic() {
    this.topicService.getAllTopic().subscribe((rs) => {
      this.topic = rs;
    });
  }
  getAllComment() {
    this.commentService.getAllComment().subscribe((rs) => {
      this.comment = rs;
    });
  }
  getCurrentDateTime() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
  
    return `${day}, ${date} ${month} ${year}`;
  }

  search() {
    this.router.navigate(['/home','search'], {
      queryParams: {
        q: this.searchText
      }
    })
  }
}
