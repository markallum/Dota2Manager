
export interface Match {
    TeamRadiant: TeamMatched;
    TeamDire: TeamMatched;

    IsRadiantWin: boolean;
}

export interface TeamMatched {
    TeamInfo: TeamInfo;
    Players: PlayerMatched[];
    TotalInfluence: number;
}

export interface PlayerMatched {
    Player: Player;
    Hero: HeroMatched;
    Influence: number;
}

export interface HeroMatched {
    HeroInfo: Hero;
    Matchups: Matchup[];

    InfluenceEfficiencyModifier: number;
    InfluencePoiseModifier: number;
    InfluenceSpeedModifier: number;
    InfluencePositioningModifier: number;
    InfluenceAwarenessModifier: number;
    InfluenceTotalModifier: number;
    InfluenceMatchups: number;
}

export interface Matchup {
    TargetHeroID: number;
    Disadvantage: number;
}

export interface TeamInfo {
    id: number;
    Name: string;
}

export interface Player {
    id: number;
    Name: string;
    Age: number;
    Efficiency: number;
    Poise: number;
    Speed: number;
    Positioning: number;
    Awareness: number;
    HasTeam: boolean;
    TeamID: number;
}

export interface Hero {
    id: number;
    HeroID: number;
    Name: string;
    Type: string;
    isMelee: boolean;
    Efficiency: number;
    Poise: number;
    Speed: number;
    Positioning: number;
    Awareness: number;
}

export interface WinRatesVersus {
    id: number;
    BaseHeroID: number;
    TargetHeroID: number;
    Disadvantage: number;
}