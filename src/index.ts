import "./styles/fonts.css"
import Phaser from "phaser"
import { GAME_WIDTH, GAME_HEIGHT } from "./constants"
import createStore from "./state/create-store"
import MainScene from "./scenes/main-scene"

export const store = createStore()

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game-root",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scene: [MainScene],
})
