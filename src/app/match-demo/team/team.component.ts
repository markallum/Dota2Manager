import { Component, OnInit, Input } from '@angular/core';
import { TeamInDraft } from '../../models/team.model';
import { HeroInDraft } from '../../models/hero.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team: TeamInDraft;
  @Input() availableHeroes: HeroInDraft[];

  constructor() { }

  ngOnInit() {
    console.log(this.team);

    this.team.players
  }



  onHeroSelect(hero) {
    hero.isSelected = true;
    console.log(this.availableHeroes);
  }
}
