import { Component, OnInit } from '@angular/core';
import { Match } from '../match.model';
import { TestService } from '../test-service';

@Component({
  selector: 'app-match-demo',
  templateUrl: './match-demo.component.html',
  styleUrls: ['./match-demo.component.css']
})
export class MatchDemoComponent implements OnInit {

  matchLoaded: Promise<boolean>;
  match: Match;
  constructor(private testService: TestService) {
    this.testService.getMatch().subscribe(
      (data: Match) => {

        this.match = data;
        this.matchLoaded = Promise.resolve(true);
      }
    );

  }

  ngOnInit() {
  }

}
