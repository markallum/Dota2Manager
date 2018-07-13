import { Component, OnInit } from '@angular/core';
import { TestService } from '../test-service';
import { Hero } from '../models/hero.model';
import { Draft } from '../models/draft.model';

@Component({
  selector: 'app-match-demo',
  templateUrl: './match-demo.component.html',
  styleUrls: ['./match-demo.component.css']
})
export class MatchDemoComponent implements OnInit {

  matchLoaded: Promise<boolean>;
  match: Draft;
  availableHeroes: Hero[];
  constructor(private testService: TestService) {
    this.testService.getMatch().subscribe(
      (data: Draft) => {

        this.match = data;
        this.availableHeroes = this.match.availableHeroes;
        this.matchLoaded = Promise.resolve(true);
      }
    );

  }

  ngOnInit() {
  }

  playMatch() {
    //console.log(this.match);
    this.testService.playMatch(this.match).subscribe((data) => console.log(data));
  }

}
