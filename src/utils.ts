import { Tweens } from "phaser"

export const stopTween = (tween?: Tweens.Tween) => {
  if (tween && tween.isPlaying) {
    tween.stop()
  }
  return tween
}
