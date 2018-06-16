import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Match } from "./match.model";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {
    url = 'http://localhost:57041/api/match';
    constructor(private http: HttpClient) {}

    getMatch() : Observable<Match> {
        return this.http.get<Match>(this.url)
        .map(res => <Match>res);
    }


    


}