import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Draft } from "./models/draft.model";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {
    url = 'http://localhost:57041/api/demo';
    constructor(private http: HttpClient) {}

    getMatch() : Observable<Draft> {
        return this.http.get<Draft>(this.url)
            .map(res => <Draft>res);
    }


    


}