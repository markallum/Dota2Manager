import { Component, OnInit, Input } from '@angular/core';
import { TeamMatched } from '../../match.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() Team: TeamMatched;

  constructor() { }

  ngOnInit() {
    console.log(this.Team.TeamInfo.Name);
  }

}
