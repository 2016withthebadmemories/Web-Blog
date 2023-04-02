import { commentDto } from './../app/modules/admin/modules/comment/list-comment/list-comment.component';
import { postDto } from './../app/modules/home/modules/post/post.component';
import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class CommentService {
    constructor(private httpClient: HttpClient) {
        
    }

    getAllComment() {
       return this.httpClient.get<commentDto[]>(environment.baseApiUrl + "Comment");
    }

    getCommentById(id: number) {
        return this.httpClient.get<commentDto>(environment.baseApiUrl + `Comment/${id}`)
    }
    createComment(data: commentDto) {
        return this.httpClient.post(environment.baseApiUrl + "Comment", data)
    }
    delete(id: number) {
        return this.httpClient.delete(environment.baseApiUrl + `Comment?id=${id}`);
    }
}