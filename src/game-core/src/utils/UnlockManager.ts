export class UnlockManager {
  private static STORAGE_KEY = 'scientist_smash_unlocked_characters';

  // 取得玩家目前所有已解鎖的角色 ID 列表
  public static getUnlockedCharacters(): string[] {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      // 預設愛因斯坦與特斯拉預設解鎖
      const defaultUnlocked = ['einstein', 'tesla'];
      if (!saved) return defaultUnlocked;
      
      const parsed: string[] = JSON.parse(saved);
      return Array.from(new Set([...defaultUnlocked, ...parsed]));
    } catch {
      return ['einstein', 'tesla'];
    }
  }

  // 檢查並解鎖符合條件的新角色 (根據玩家當前積分)
  public static checkAndUnlock(playerScore: number): string[] {
    const unlocked = this.getUnlockedCharacters();
    const newlyUnlocked: string[] = [];

    // 定義所有隱藏角色的解鎖條件
    const secretCharacters = [
      { id: 'hawking', requiredScore: 2000 }
    ];

    secretCharacters.forEach(char => {
      if (!unlocked.includes(char.id) && playerScore >= char.requiredScore) {
        unlocked.push(char.id);
        newlyUnlocked.push(char.id);
        console.log(`🎉 恭喜解鎖隱藏角色: ${char.id}！`);
      }
    });

    // 寫回 LocalStorage
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(unlocked));
    return newlyUnlocked;
  }

  // 驗證特定角色是否已解鎖
  public static isUnlocked(characterId: string): boolean {
    return this.getUnlockedCharacters().includes(characterId);
  }
}