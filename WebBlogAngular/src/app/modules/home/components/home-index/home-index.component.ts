import { Component } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { postDto } from '../../modules/post/post.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent {
  public post: postDto[] = [];

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.getAllPost();
  }
  getAllPost() {
    this.activatedRoute.params.subscribe(s => {

      this.postService.getAllPost().subscribe(rs => {
        this.post = rs
      })
    })
  }
}
