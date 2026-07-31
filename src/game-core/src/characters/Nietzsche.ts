import { BaseCharacter } from './BaseCharacter';
import { Container, Graphics } from 'pixi.js';

export class Nietzsche extends BaseCharacter {
  constructor(startX: number, startY: number) {
    super({
      id: 'nietzsche',
      name: '尼采',
      title: '哲學家',
      maxHp: 90,
      speed: 5.0, // 跑得比較快
      assetPath: '/assets/characters/nietzsche/idle.png'
    }, startX, startY);
  }

  public override specialSkill(targetContainer: Container): void {
    console.log(`${this.config.name} 發動絕招：上帝已死（精神超載波）！`);
    
    const skillEffect = new Graphics();
    skillEffect.circle(0, 0, 80).fill({ color: 0x9900ff, alpha: 0.5 });
    skillEffect.x = this.x;
    skillEffect.y = this.y;
    
    targetContainer.addChild(skillEffect);

    setTimeout(() => {
      targetContainer.removeChild(skillEffect);
      skillEffect.destroy();
    }, 400);
  }
}