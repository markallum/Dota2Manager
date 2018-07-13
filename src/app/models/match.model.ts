import { TeamInMatch } from "./team.model";

export interface Match {
    teamRadiant: TeamInMatch;
    teamDire: TeamInMatch;
    isRadiantWin: boolean;
}