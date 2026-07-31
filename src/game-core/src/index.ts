// src/game-core/src/index.ts

export interface PlayerSession {
  username: string;
  score: int; // or number
}

export class GameCoreEngine {
  constructor(container: HTMLElement, session: PlayerSession) {
    // Initialize your canvas, PixiJS, or game loop here
    console.log(`Initializing game for ${session.username}`);
  }

  public destroy() {
    // Cleanup logic
  }
}