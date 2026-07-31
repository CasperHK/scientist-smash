import { BaseCharacter } from './BaseCharacter';
import { Container, Graphics } from 'pixi.js';

export class Tesla extends BaseCharacter {
  constructor(startX: number, startY: number) {
    super({
      id: 'tesla',
      name: '尼古拉·特斯拉',
      title: '交流電之父',
      maxHp: 95,
      speed: 4.8,
      assetPath: '/assets/characters/tesla/idle.png'
    }, startX, startY);
  }

  // 實作特斯拉的專屬絕招：「高壓電弧 / 特斯拉線圈放電」
  public override specialSkill(targetContainer: Container): void {
    console.log(`${this.config.name} 發動絕招：百萬伏特特斯拉線圈！`);
    
    // 繪製一個具備科技感與高壓電磁波擴散的雷電防護罩特效
    const skillEffect = new Graphics();
    skillEffect.circle(0, 0, 90).stroke({ width: 3, color: 0x00ffff }); // 青色電弧光圈
    skillEffect.circle(0, 0, 60).fill({ color: 0x00f2fe, alpha: 0.3 });
    skillEffect.x = this.x;
    skillEffect.y = this.y;
    
    targetContainer.addChild(skillEffect);

    // 0.4秒後自動移除特效
    setTimeout(() => {
      targetContainer.removeChild(skillEffect);
      skillEffect.destroy();
    }, 400);
  }
}