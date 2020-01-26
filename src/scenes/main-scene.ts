import Phaser, { GameObjects, Scene } from "phaser"
import { ATLAS, ASSET_PATH, SCENE, GAME_CENTER } from "../constants"
import Card, { CardDataKey } from "../game-objects/card"
import {
  getIsGameComplete,
  getCurrentCard,
  getTrumpCriteria,
} from "../state/game/game.selectors"
import ErrorFlash from "../game-objects/error-flash"
import { store } from ".."
import { CardData } from "../state/game/game.props"
import { STACK } from "../state/game/game.state"
import CardStack from "../game-objects/card-stack"
import { playCard } from "../state/game/game.actions"
import FeedbackLabel from "../game-objects/feedback-label"

const PLAYER_CARD_POS = new Phaser.Geom.Point(GAME_CENTER.x, 500)

class MainScene extends Scene {
  private flash: ErrorFlash | undefined
  private playerCard: Card | undefined
  private stacks: CardStack[] | undefined
  private feedback: FeedbackLabel | undefined

  constructor() {
    super({ key: SCENE.MAIN })
  }

  preload() {
    this.loadAtlas(ATLAS.LEVEL)
  }

  create() {
    const state = store.getState()

    this.feedback = new FeedbackLabel({ scene: this })
    this.add.existing(this.feedback)

    this.playerCard = new Card({
      scene: this,
      data: getCurrentCard(state) as CardData,
      x: PLAYER_CARD_POS.x,
      y: PLAYER_CARD_POS.y,
    })
    this.playerCard.activateDnd(true)
    this.add.existing(this.playerCard)

    this.stacks = STACK.map((cardData, idx) => {
      const stackCard = new CardStack({
        scene: this,
        data: cardData,
        x: 500 + idx * 200,
        y: 200,
      })
      this.add.existing(stackCard)
      return stackCard
    })

    this.input.on("dragenter", this.handleDragEnter)
    this.input.on("dragleave", this.handeDragLeave)
    this.input.on("dragend", this.handeDragEnd)
    this.input.on("drop", this.handleDrop)

    store.subscribe(this.handleStoreUpdate)
  }

  private handleDragEnter = (
    pointer: any,
    draggedCard: Card,
    dropZone: GameObjects.Zone
  ) => {
    const stack = dropZone.parentContainer as CardStack
    stack.setScale(1.2)
  }

  private handeDragLeave = (
    pointer: any,
    draggedCard: any,
    dropZone: GameObjects.Zone
  ) => {
    const stack = dropZone.parentContainer as CardStack
    stack.setScale(1)
  }

  private handeDragEnd = (
    pointer: any,
    draggedCard: Card,
    hasDropped: boolean
  ) => {
    this.playerCard?.setPosition(PLAYER_CARD_POS.x, PLAYER_CARD_POS.y)
  }

  private handleDrop = (
    pointer: Phaser.Input.Pointer,
    card: Card,
    dropZone: GameObjects.Zone
  ) => {
    const cardData = card.getData(CardDataKey.CARD_DATA) as CardData
    const stack = dropZone.parentContainer as CardStack
    const trump = getTrumpCriteria(store.getState())
    const isCorrect = stack.cardData[trump] === cardData[trump]

    stack.setScale(1)
    card.activateDnd(false)
    card.setPosition(stack.x, stack.y + 100)

    this.feedback?.show(isCorrect, stack.x, stack.y + 200)

    setTimeout(() => {
      this.feedback?.hide()
      card.setPosition(PLAYER_CARD_POS.x, PLAYER_CARD_POS.y)
      card.activateDnd(true)
      store.dispatch(playCard(isCorrect))
    }, 2000)
  }

  private handleStoreUpdate = async () => {
    const state = store.getState()
    const isGameOver = getIsGameComplete(state)
    if (isGameOver) {
      this.playerCard?.setVisible(false)
      return
    }

    const cardData = getCurrentCard(state)
    if (cardData) {
      this.playerCard?.updateCardData(cardData)
      this.playerCard?.setPosition(PLAYER_CARD_POS.x, PLAYER_CARD_POS.y)
    }

    this.stacks?.forEach(stack => stack.setScale(1))
  }

  private loadAtlas = (atlas: ATLAS) => {
    this.load.multiatlas(atlas, `${ASSET_PATH}/${atlas}.json`, ASSET_PATH)
  }
}

export default MainScene
