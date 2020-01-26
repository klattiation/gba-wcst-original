import "./styles/fonts.css"
import Phaser from "phaser"
import { GAME_WIDTH, GAME_HEIGHT } from "./constants"
import createStore from "./state/create-store"
import MainScene from "./scenes/main-scene"
import GameManager from "./state/game-manager"

const store = createStore()

export class Game extends Phaser.Game {
  public manager: GameManager

  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)

    this.manager = new GameManager(store)
  }
}

new Game({
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scene: [MainScene],
})
