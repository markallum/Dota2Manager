import { Hero, HeroInMatch } from "./hero.model";

export interface Player {
    id: number;
    name: string;
    age: number;
    efficiency: number;
    poise: number;
    speed: number;
    positioning: number;
    awareness: number;
    hasTeam: boolean;
    teamID: number;
}

export interface PlayerInDraft extends Player {
    hasPickedHero: boolean;
    hero: Hero;
}

export interface PlayerInMatch extends Player {
    hasPickedHero: boolean;
    hero: HeroInMatch;
    influence: number;
}