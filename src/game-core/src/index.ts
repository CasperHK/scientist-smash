import { Application, Assets, Sprite } from 'pixi.js';
// ... 其他匯入

export interface PlayerSession {
  username: string;
  score: number;
  characterId: string;
  stageId: string;           // ⬅️ 新增：玩家選擇的場景 ID
  assetBasePath?: string;    // ⬅️ 新增：Qwik public 的靜態資源基礎網址 (預設 "/assets/")
}

export class ScientistSmashGame {
  private app: Application;
  private container: HTMLElement;
  private session: PlayerSession;
  private backgroundSprite: Sprite | null = null;
  // ... 其他屬性

  constructor(container: HTMLElement, session: PlayerSession) {
    this.container = container;
    this.session = session;
    this.initGame();
  }

  private async initGame() {
    this.app = new Application();
    await this.app.init({
      width: 800,
      height: 450,
      background: '#1a1a2e', // 預設背景色（如果圖片載入失敗時的底色）
    });
    this.container.appendChild(this.app.canvas);

    // 1. 載入並設定背景場景圖
    await this.loadStageBackground();

    // 2. 載入角色...
    // 3. 啟動遊戲循環...
  }

  private async loadStageBackground() {
    const baseUrl = this.session.assetBasePath || '/assets/';
    const stageImageUrl = `${baseUrl}stages/${this.session.stageId}/background.png`;

    try {
      // 使用 PixiJS 非同步載入背景圖
      const texture = await Assets.load(stageImageUrl);
      this.backgroundSprite = new Sprite(texture);
      
      // 確保背景圖大小符合畫布尺寸 (800x450)
      this.backgroundSprite.width = 800;
      this.backgroundSprite.height = 450;
      
      // 放到 stage 的最底層 (Index 0)
      this.app.stage.addChildAt(this.backgroundSprite, 0);
    } catch (e) {
      console.warn(`無法載入場景圖片: ${stageImageUrl}，將使用預設純色背景`, e);
    }
  }

  public destroy() {
    if (this.app) {
      this.app.destroy(true, { children: true });
    }
  }
}