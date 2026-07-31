import { BaseCharacter } from './BaseCharacter';
import { Container, Graphics } from 'pixi.js';

export class DaVinci extends BaseCharacter {
  constructor(startX: number, startY: number) {
    super({
      id: 'da-vinci',
      name: '達文西',
      title: '文藝復興巨匠',
      maxHp: 110,         // 血量較厚
      speed: 4.2,         // 移動速度中等
      assetPath: '/assets/characters/da-vinci/idle.png'
    }, startX, startY);
  }

  // 實作達文西的專屬絕招：「維特魯威機械旋風 / 裝甲車突擊」
  public override specialSkill(targetContainer: Container): void {
    console.log(`${this.config.name} 發動絕招：維特魯威齒輪陣列！`);
    
    // 繪製一個具備文藝復興機械美感的齒輪／防護罩特效
    const skillEffect = new Graphics();
    skillEffect.circle(0, 0, 70).stroke({ width: 4, color: 0xd4af37 }); // 金色文藝復興風格
    skillEffect.circle(0, 0, 50).fill({ color: 0x8b4513, alpha: 0.4 });
    skillEffect.x = this.x;
    skillEffect.y = this.y;
    
    targetContainer.addChild(skillEffect);

    // 0.6秒後自動移除特效
    setTimeout(() => {
      targetContainer.removeChild(skillEffect);
      skillEffect.destroy();
    }, 600);
  }
}