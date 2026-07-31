export class GamepadController {
  private gamepadIndex: number | null = null;

  constructor() {
    window.addEventListener("gamepadconnected", (e: GamepadEvent) => {
      console.log(`手掣已連線: ${e.gamepad.id} (Index: ${e.gamepad.index})`);
      this.gamepadIndex = e.gamepad.index;
    });

    window.addEventListener("gamepaddisconnected", (e: GamepadEvent) => {
      console.log(`手掣已斷線: ${e.gamepad.id}`);
      if (this.gamepadIndex === e.gamepad.index) {
        this.gamepadIndex = null;
      }
    });
  }

  public getState() {
    if (this.gamepadIndex === null) return null;

    const gamepads = navigator.getGamepads();
    const gp = gamepads[this.gamepadIndex];
    if (!gp) return null;

    return {
      axes: gp.axes,
      buttons: gp.buttons,
    };
  }
}