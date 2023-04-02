import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { postDto } from '../../modules/post/post.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public post: postDto[] = [];
  public text = "";
  constructor(
    private postService: PostService,
    private activedRoute:ActivatedRoute
  ) { }
  ngOnInit() {
    this.activedRoute.queryParams.subscribe(rs => {
      if (rs['q']) {
        this.getPostByText(rs['q']);        
      }
    })
    }
  getPostByText(text: string) {
    this.postService.getPostByText(text).subscribe((rs) => {
      this.post = rs;
    });
  }
}
