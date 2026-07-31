import { BaseCharacter } from './BaseCharacter';
import { Container, Graphics } from 'pixi.js';

export class Einstein extends BaseCharacter {
  constructor(startX: number, startY: number) {
    super({
      id: 'einstein',
      name: '愛因斯坦',
      title: '相對論大師',
      maxHp: 100,
      speed: 4.5,
      assetPath: '/assets/characters/einstein/idle.png'
    }, startX, startY);
  }

  public override specialSkill(targetContainer: Container): void {
    console.log(`${this.config.name} 發動絕招：相對論重力場！`);
    
    const skillEffect = new Graphics();
    skillEffect.circle(0, 0, 70).fill({ color: 0xffaa00, alpha: 0.5 });
    skillEffect.x = this.x;
    skillEffect.y = this.y;
    
    targetContainer.addChild(skillEffect);

    setTimeout(() => {
      targetContainer.removeChild(skillEffect);
      skillEffect.destroy();
    }, 500);
  }
}