import Phaser, { GameObjects, Scene } from "phaser"
import { ATLAS, ASSET_PATH, SCENE, GAME_CENTER } from "../constants"
import Card from "../game-objects/cards/card"
import { getIsGameComplete, getCurrentCard } from "../state/game/game.selectors"
import ErrorFlash from "../game-objects/error-flash"
import { store } from ".."
import { CardData } from "../state/game/game.props"
import { STACK } from "../state/game/game.state"

class MainScene extends Scene {
  private flash: ErrorFlash | undefined

  constructor() {
    super({ key: SCENE.MAIN })
  }

  preload() {
    this.loadAtlas(ATLAS.LEVEL)
  }

  create() {
    const state = store.getState()
    const playerCard = new Card({
      scene: this,
      data: getCurrentCard(state) as CardData,
      x: GAME_CENTER.x,
      y: 500,
    })
    playerCard.activateDnd()
    this.add.existing(playerCard)

    STACK.forEach((cardData, idx) => {
      const stackCard = new Card({
        scene: this,
        data: cardData,
        x: 570 + idx * 150,
        y: 200,
      })
      this.add.existing(stackCard)
    })

    this.input.on("dragenter", this.handleDragEnter)
    this.input.on("dragleave", this.handeDragLeave)
    this.input.on("dragend", this.handeDragEnd)
    this.input.on("drop", this.handleDrop)

    store.subscribe(this.handleStoreUpdate)
  }

  private handleDragEnter = (
    pointer: any,
    product: any,
    dropZone: GameObjects.Zone
  ) => {
    // const card: Card = dropZone.parentContainer as Card
    // card.animateDragOver()
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

  private handleStoreUpdate = async () => {
    const state = store.getState()
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
