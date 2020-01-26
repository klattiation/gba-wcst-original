import Phaser, { GameObjects, Scene } from "phaser"
import { ATLAS, ASSET_PATH, SCENE } from "../constants"
import Card from "../game-objects/cards/card"
import { getIsGameComplete } from "../state/game/game.selectors"
import ErrorFlash from "../game-objects/error-flash"
import { GameEvent } from "../state/game-manager"
import { GlobalState } from "../state/create-store"
import { getGameManager } from "../utils"

class MainScene extends Scene {
  private flash: ErrorFlash | undefined

  constructor() {
    super({ key: SCENE.MAIN })
  }

  preload() {
    this.loadAtlas(ATLAS.LEVEL)
  }

  create() {
    this.input.on("dragenter", this.handleDragEnter)
    this.input.on("dragleave", this.handeDragLeave)
    this.input.on("dragend", this.handeDragEnd)
    this.input.on("drop", this.handleDrop)

    getGameManager(this).on(GameEvent.STORE_UPDATE, this.handleStoreUpdate)
  }

  private handleDragEnter = (
    pointer: any,
    product: any,
    dropZone: GameObjects.Zone
  ) => {
    const card: Card = dropZone.parentContainer as Card
    card.animateDragOver()
  }

  private handeDragLeave = (
    pointer: any,
    product: any,
    dropZone: GameObjects.Zone
  ) => {}

  private handeDragEnd = (
    pointer: any,
    product: Product,
    hasDropped: boolean
  ) => {}

  private handleDrop = (
    pointer: Phaser.Input.Pointer,
    product: Product,
    dropZone: GameObjects.Zone
  ) => {}

  private handleStoreUpdate = async (state: GlobalState) => {
    const isGameOver = getIsGameComplete(state)
    if (isGameOver) {
      console.log("game over")
    }
  }

  private loadAtlas = (atlas: ATLAS) => {
    this.load.multiatlas(atlas, `${ASSET_PATH}/${atlas}.json`, ASSET_PATH)
  }
}

export default MainScene
