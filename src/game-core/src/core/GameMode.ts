export enum GameModeType {
  PVE_AI = 'pve_ai',             // 玩家對電腦
  PVP_ONLINE = 'pvp_online'      // 雙人聯機對戰
}

export interface GameConfig {
  mode: GameModeType;
  characterId: string;
  opponentId?: string; // AI 或對手角色
  stageId: string;
  roomId?: string;     // 連機房號（PVP 時使用）
}