import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import {BehaviorSubject} from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class AuthService {
    public authToken$: BehaviorSubject<string> = new BehaviorSubject<string>("");
    constructor(private httpClient: HttpClient) {
        
    }

    setToken(token: string) {
        this.authToken$.next(token);
        localStorage.setItem("token",token)
    }

}