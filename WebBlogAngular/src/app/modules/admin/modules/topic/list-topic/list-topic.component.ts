import { TopicService } from './../../../../../../services/topic.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditTopicComponent } from '../create-edit-topic/create-edit-topic.component';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: ['./list-topic.component.css'],
})
export class ListTopicComponent {
  public topic: topicDto[] = [];
  constructor(private topicService: TopicService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllTopic();
  }
  getAllTopic() {
    this.topicService.getAllTopic().subscribe((rs) => {
      this.topic = rs;
    });
  }
  create() {
    const dialogRef = this.dialog.open(CreateEditTopicComponent, {});
    dialogRef.afterClosed().subscribe((rs) => {
      this.getAllTopic();
    });
  }
  edit(item: topicDto) {
    const dialogRef = this.dialog.open(CreateEditTopicComponent, {
      data: {
        topic: JSON.parse(JSON.stringify(item)),
      },
    });
    dialogRef.afterClosed().subscribe((rs) => {
      this.getAllTopic();
    });
  }
}
export interface topicDto {
  id?: number;
  name: string;
}
