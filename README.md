# 🧪 Scientist Smash (科學家大亂鬥) - Game
歡迎來到 「科學家大亂鬥 (Scientist Smash)」 的遊戲核心 Library！本專案採用 PixiJS 進行高效能 WebGL 硬體加速渲染，並使用 Rslib 打包為現代 ESM 模組，專為整合至前端框架（如 Qwik、React 等）而設計。

## 🚀 專案特點
 * ⚡高效能渲染：基於 PixiJS，支援流暢的 2D 角色動畫與特效。
 * 📦 現代化打包：使用 Rslib 提供極速的編譯體驗，並自動生成完整的 TypeScript 型別宣告檔。
 * 🔌 模組化設計：乾淨的 API 封裝，可無縫嵌入至任何現代前端網站或框架中。
🛠️ 技術堆疊
 * 渲染引擎：[PixiJS](https://pixijs.com/) (^8.x)
 * 動畫庫：[GSAP](https://gsap.com/) (^3.x)
 * 打包工具：[Rslib](https://rslib.rs/)
 * 語言：TypeScript

## 📂 專案結構
```ts
scientist-smash-core/
├── dist/                # 打包產出目錄 (ESM & 宣告檔)
├── src/
│   └── index.ts         # 遊戲核心進入點 (導出 ScientistSmashGame 與型別)
├── package.json
├── rslib.config.ts      # Rslib 打包設定
└── tsconfig.json        # TypeScript 設定
```

## ⚙️ 安裝與開發
1. 安裝相依套件
```bash
pnpm install
```

3. 開發模式 (監控程式碼變更並自動重新打包)
```bash
pnpm dev
```

4. 正式打包
```bash
pnpm build
```

## 📖 使用方式
在外部專案（例如 Qwik 網站）中安裝並引入此 Library：
```bash
import { ScientistSmashGame } from 'scientist-smash-core';
import type { PlayerSession } from 'scientist-smash-core';

// 準備玩家資料
const playerSession: PlayerSession = {
  username: '居禮夫人',
  score: 1500,
};

// 取得網頁上的 DOM 容器
const container = document.getElementById('game-container')!;

// 初始化遊戲實例
const game = new ScientistSmashGame(container, playerSession);

// 當組件銷毀時清理資源
// game.destroy();
```

## 📜 授權條款
本專案採用 MIT License。
