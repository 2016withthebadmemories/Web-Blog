import { topicDto } from './../app/modules/admin/modules/topic/list-topic/list-topic.component';
import { postDto } from './../app/modules/home/modules/post/post.component';
import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class TopicService {
    constructor(private httpClient: HttpClient) {
        
    }

    getAllTopic() {
       return this.httpClient.get<topicDto[]>(environment.baseApiUrl + "Topic");
    }

    getTopicById(id: number) {
        return this.httpClient.get<topicDto>(environment.baseApiUrl + `Topic/${id}`)
    }
    getPostByTopic(topicId: number) {
        return this.httpClient.get<postDto[]>(environment.baseApiUrl + `Topic/topicId=${topicId}`)
    }
    createTopic(data: topicDto) {
        return this.httpClient.post(environment.baseApiUrl + "Topic", data)
    }
    editTopic(data: topicDto) {
        return this.httpClient.put(environment.baseApiUrl + "Topic", data)
    }
    delete(id: number) {
        return this.httpClient.delete(environment.baseApiUrl + `Topic?id=${id}`);
    }
}