import { Scene, Tweens } from "phaser"
import { Game } from ".."

export const getGameManager = (scene: Scene) => (scene.game as Game).manager
export const stopTween = (tween?: Tweens.Tween) => {
  if (tween && tween.isPlaying) {
    tween.stop()
  }
  return tween
}
