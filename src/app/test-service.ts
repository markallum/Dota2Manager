import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Draft } from "./models/draft.model";
import { Observable, throwError } from "rxjs";
import 'rxjs/add/operator/map';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class TestService {
    url = 'http://localhost:57041/api/demo';
    constructor(private http: HttpClient) {}

    

    getMatch() : Observable<Draft> {
        return this.http.get<Draft>(this.url)
            .map(res => <Draft>res);
    }

    playMatch(draft: Draft) : Observable<Draft> {
        //console.log('hit');
        return this.http.post<Draft>(this.url, draft, httpOptions);
    }




    


}