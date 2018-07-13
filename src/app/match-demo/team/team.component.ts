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



  onHeroSelect(hero, playerId) {

    // Sees if another hero was previously selected by this player
    var oldHero = this.availableHeroes
      .find(x => x.selectedById == playerId);
    if (oldHero != null) {
      // Player had a previous selection, make it available again
      oldHero.isSelected = false;
      oldHero.selectedById = 0;
    }
    
    hero.isSelected = true;
    hero.selectedById = playerId;
    this.team.players.find(x => x.id == playerId).hasPickedHero = true;
  }
  
}
