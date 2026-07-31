import { BaseCharacter } from './BaseCharacter';
import { Container, Graphics } from 'pixi.js';

export class Hawking extends BaseCharacter {
  constructor(startX: number, startY: number) {
    super({
      id: 'hawking',
      name: '霍金',
      title: '宇宙大師',
      maxHp: 80,
      speed: 3.5, // 輪椅移動較慢
      assetPath: '/assets/characters/hawking/idle.png'
    }, startX, startY);
  }

  public override specialSkill(targetContainer: Container): void {
    // 實作黑洞吸力特效
    const blackHole = new Graphics();
    blackHole.circle(0, 0, 100).fill({ color: 0x000000, alpha: 0.8 });
    blackHole.x = this.x;
    blackHole.y = this.y;
    targetContainer.addChild(blackHole);

    setTimeout(() => {
      targetContainer.removeChild(blackHole);
      blackHole.destroy();
    }, 800);
  }
}