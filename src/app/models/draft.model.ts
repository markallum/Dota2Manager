import { Hero } from "./hero.model";
import { TeamInDraft } from "./team.model";

export interface Draft {
    availableHeroes: Hero[];
    teamRadiant: TeamInDraft;
    teamDire: TeamInDraft;
}