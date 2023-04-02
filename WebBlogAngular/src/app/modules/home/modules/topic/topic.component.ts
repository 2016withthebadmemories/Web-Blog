import { Component } from '@angular/core';
import { topicDto } from 'src/app/modules/admin/modules/topic/list-topic/list-topic.component';
import { TopicService } from 'src/services/topic.service';
import { postDto } from '../post/post.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {

  public topic: topicDto[] = [];
  public post: postDto[] = [];
  id: number = 0;
  constructor(
    private topicService: TopicService,
    private activatedRoute: ActivatedRoute,

  ){}
  ngOnInit() {
    this.activatedRoute.params.subscribe(s => {
      this.id = s['id']
      this.topicService.getPostByTopic(this.id).subscribe(x => {
        this.post = x
      })
    })
  }
}
