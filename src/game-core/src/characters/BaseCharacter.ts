import { Container, Sprite, Assets, Text } from 'pixi.js';

export interface CharacterConfig {
  id: string;          // 角色唯一識別碼 (例: "nietzsche", "da-vinci")
  name: string;        // 顯示名稱 (例: "尼采", "達文西")
  title: string;       // 稱號/職業 (例: "哲學家", "文藝復興大師")
  maxHp: number;       // 最大血量
  speed: number;       // 移動速度
  assetPath: string;   // 圖片資源路徑
}

export abstract class BaseCharacter {
  public container: Container;
  public sprite: Sprite | null = null;
  public nameText: Text;
  
  public config: CharacterConfig;
  public x: number = 0;
  public y: number = 0;
  public hp: number;
  public isFacingRight: boolean = true;

  constructor(config: CharacterConfig, startX: number, startY: number) {
    this.config = config;
    this.hp = config.maxHp;
    this.x = startX;
    this.y = startY;

    this.container = new Container();
    this.container.x = this.x;
    this.container.y = this.y;

    // 顯示名字與稱號 (例如: 尼采 [哲學家])
    this.nameText = new Text({
      text: `${this.config.name}\n<${this.config.title}>`,
      style: { 
        fill: '#ffffff', 
        fontSize: 12, 
        fontWeight: 'bold',
        align: 'center' 
      }
    });
    this.nameText.anchor.set(0.5, 1.5);
    this.container.addChild(this.nameText);
  }

  public async loadAsset(): Promise<void> {
    try {
      const texture = await Assets.load(this.config.assetPath);
      this.sprite = new Sprite(texture);
      this.sprite.anchor.set(0.5, 0.5);
      this.container.addChildAt(this.sprite, 0);
    } catch (e) {
      console.error(`無法載入角色 ${this.config.id} 的圖片:`, e);
    }
  }

  public update(deltaX: number, deltaY: number): void {
    if (deltaX !== 0 || deltaY !== 0) {
      this.x += deltaX * this.config.speed;
      this.y += deltaY * this.config.speed;

      this.container.x = this.x;
      this.container.y = this.y;

      if (deltaX > 0) {
        this.isFacingRight = true;
        if (this.sprite) this.sprite.scale.x = 1;
      } else if (deltaX < 0) {
        this.isFacingRight = false;
        if (this.sprite) this.sprite.scale.x = -1;
      }
    }
  }

  // 每個角色的專屬絕招
  public abstract specialSkill(targetContainer: Container): void;

  public takeDamage(amount: number): void {
    this.hp = Math.max(0, this.hp - amount);
    console.log(`${this.config.name} 受到 ${amount} 點傷害，剩餘血量: ${this.hp}`);
  }
}