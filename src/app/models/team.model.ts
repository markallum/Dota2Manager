import { Player, PlayerInDraft, PlayerInMatch } from "./player.model";

export interface Team {
    id: number;
    name: string;
}

export interface TeamWithPlayers extends Team {
    players: Player[];
}

export interface TeamInDraft extends Team {
    players: PlayerInDraft[];
}

export interface TeamInMatch extends Team {
    players: PlayerInMatch[];
    influence: number;
}