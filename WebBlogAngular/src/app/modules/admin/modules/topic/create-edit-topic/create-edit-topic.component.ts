import { TopicService } from './../../../../../../services/topic.service';
import { topicDto } from './../list-topic/list-topic.component';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-edit-topic',
  templateUrl: './create-edit-topic.component.html',
  styleUrls: ['./create-edit-topic.component.css'],
})
export class CreateEditTopicComponent {
  public topic : topicDto = {} as topicDto
  constructor(public matDialogRef: MatDialogRef<CreateEditTopicComponent>,
    private topicService: TopicService,
    @Inject(MAT_DIALOG_DATA) public data: CreateEditTopicDialogData) {
  }
  ngOnInit() {
    if (this.data?.topic?.id) {
      this.topic = this.data.topic
    }
  }

  close() {
    console.log(this.matDialogRef)
    this.matDialogRef.close();
  }

  create() {
    if (this.topic.id) {
      this.topicService.editTopic(this.topic).subscribe(rs => {
        this.close()
      })
    } else {
      this.topicService.createTopic(this.topic).subscribe(rs => {
        this.close()
      })
    }
    
  }
}

export interface CreateEditTopicDialogData{
  topic: topicDto
}