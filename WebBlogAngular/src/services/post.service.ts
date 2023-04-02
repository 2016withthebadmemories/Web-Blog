import { postDto } from './../app/modules/home/modules/post/post.component';
import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { commentDto } from 'src/app/modules/admin/modules/comment/list-comment/list-comment.component';

@Injectable({
    providedIn:'root'
})
export class PostService {
    constructor(private httpClient: HttpClient) {
        
    }

    getAllPost() {
       return this.httpClient.get<postDto[]>(environment.baseApiUrl + "Post");
    }

    getPostById(id: number) {
        return this.httpClient.get<postDto>(environment.baseApiUrl + `Post/${id}`)
    }
    getComment(postId: number) {
        return this.httpClient.get<commentDto[]>(environment.baseApiUrl + `Post/postId=${postId}`)
    }
    getPostByText(text: string) {
        return this.httpClient.get<postDto[]>(environment.baseApiUrl + `Post/search=${text}`)
    }
    createPost(data: postDto) {
        return this.httpClient.post(environment.baseApiUrl + "Post", data)
    }
    editPost(data: postDto) {
        return this.httpClient.put(environment.baseApiUrl + "Post", data)
    }
    delete(id: number) {
        return this.httpClient.delete(environment.baseApiUrl + `Post?id=${id}`);
    }
}