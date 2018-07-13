export interface Hero {
    id: number;
    heroId: number;
    name: string;
    type: string;
    isMelee: boolean;
    efficiency: number;
    poise: number;
    speed: number;
    positioning: number;
    awareness: number;
}

export interface HeroInDraft extends Hero {
    isSelected: boolean;
    selectedById: number;
}

export interface HeroInMatch extends Hero {
    matchups: Matchup[];

    influenceEfficiencyModifier: number;
    influencePoiseModifier: number;
    influenceSpeedModifier: number;
    influencePositioningModifier: number;
    influenceAwarenessModifier: number;
    influenceTotalModifier: number;
    influenceMatchups: number;
} 

export interface Matchup {
    targetHeroID: number;
    advantage: number;
}