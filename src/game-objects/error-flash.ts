import { GameObjects, Scene, Game } from "phaser"
import { GAME_WIDTH, GAME_HEIGHT, GAME_CENTER } from "../constants"

interface ErrorFlashProps {
  scene: Scene
}

const ALPHA = 0.25

class ErrorFlash extends GameObjects.Container {
  private rect: GameObjects.Rectangle

  constructor(props: ErrorFlashProps) {
    super(props.scene)

    this.rect = new GameObjects.Rectangle(
      props.scene,
      GAME_CENTER.x,
      GAME_CENTER.y,
      GAME_WIDTH,
      GAME_HEIGHT,
      0xff0000,
      ALPHA
    )
    this.add(this.rect)

    this.setVisible(false)
  }

  animate() {
    this.setVisible(true)
    this.rect.fillAlpha = 0
    this.scene.tweens.add({
      targets: this.rect,
      props: {
        fillAlpha: ALPHA,
      },
      duration: 200,
      yoyo: true,
      ease: "Sine.easeOut",
      onComplete: () => {
        this.setVisible(false)
      },
    })
  }
}

export default ErrorFlash
