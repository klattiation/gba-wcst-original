import { GameObjects, Geom, Input, Scene } from "phaser"
import {
  ATLAS,
  ASSET_PATH,
  SCENE,
  GAME_CENTER,
  COLOR,
  FONT,
  EVENTS,
} from "../constants"
import Card, { CardDataKey } from "../game-objects/card"
import {
  getIsGameComplete,
  getCurrentCard,
  getTrumpCriteria,
  getGameResults,
} from "../state/game/game.selectors"
import { store } from ".."
import { CardData } from "../state/game/game.props"
import { STACK, EXAMPLE_CARD } from "../state/game/game.state"
import CardStack from "../game-objects/card-stack"
import { playCard } from "../state/game/game.actions"
import FeedbackLabel from "../game-objects/feedback-label"
import { InstructionController } from "../controllers/instruction-ctrl"
import Button from "../game-objects/button"
import { saveResult } from "../services/api-srv"

const PLAYER_CARD_POS = new Geom.Point(GAME_CENTER.x, 450)

class MainScene extends Scene {
  private playerCard: Card | undefined
  private stacks: CardStack[] | undefined
  private feedback: FeedbackLabel | undefined
  private instructionCtrl: InstructionController
  private instructionLabel: GameObjects.Text | undefined
  private instructionBtn: Button | undefined

  constructor() {
    super({ key: SCENE.MAIN })

    this.instructionCtrl = new InstructionController(this)
  }

  preload() {
    this.loadAtlas(ATLAS.LEVEL)
  }

  create() {
    this.events.on(EVENTS.SHOW_EXAMPLE, this.handleShowExample)
    this.events.on(EVENTS.START_GAME, this.handleStartGame)

    this.feedback = new FeedbackLabel({ scene: this })
    this.add.existing(this.feedback)

    const instruction = this.instructionCtrl.instruction
    this.instructionLabel = this.add.text(
      32,
      650,
      instruction.text,
      instructionFontStyle
    )
    this.instructionLabel.setWordWrapWidth(1200)

    this.instructionBtn = new Button({
      scene: this,
      x: 0,
      y: 800,
      text: instruction.buttonText,
      onClick: btn => {
        const nextInstr = this.instructionCtrl.next()
        this.instructionLabel?.setText(nextInstr.text)
        if (nextInstr.buttonText) {
          btn.setText(nextInstr.buttonText)
          btn.setX(btn.getWidth() / 2 + 32)
          btn.setVisible(true)
        } else {
          btn.setVisible(false)
        }
      },
    })
    this.instructionBtn.setX(this.instructionBtn.getWidth() / 2 + 32)
    this.add.existing(this.instructionBtn)

    this.playerCard = new Card({
      scene: this,
      data: EXAMPLE_CARD,
      x: PLAYER_CARD_POS.x,
      y: PLAYER_CARD_POS.y,
    })
    this.playerCard.setVisible(false)
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
    pointer: Input.Pointer,
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
      await saveResult(getGameResults(state))
      this.hideCards()
      this.showResult()
    }

    this.updateCard()
    this.stacks?.forEach(stack => stack.setScale(1))
    return Promise.resolve(true)
  }

  private hideCards() {
    this.playerCard?.setVisible(false)
    this.stacks?.forEach(stack => stack.setVisible(false))
  }

  private showResult() {
    const { x, y } = GAME_CENTER
    const label = this.add.text(x, y, "Vielen Dank für's Mitmachen!", {
      ...instructionFontStyle,
      fontSize: "48px",
    })
    label.setOrigin(0.5)
  }

  private updateCard() {
    const state = store.getState()
    const cardData = getCurrentCard(state)
    if (cardData) {
      this.playerCard?.updateCardData(cardData)
      this.playerCard?.setPosition(PLAYER_CARD_POS.x, PLAYER_CARD_POS.y)
    }
  }

  private handleShowExample = () => {
    this.playerCard?.setVisible(true)
  }

  private handleStartGame = () => {
    this.updateCard()
    this.playerCard?.activateDnd(true)
  }

  private loadAtlas = (atlas: ATLAS) => {
    this.load.multiatlas(atlas, `${ASSET_PATH}/${atlas}.json`, ASSET_PATH)
  }
}

const instructionFontStyle = {
  color: COLOR.WHITE,
  fontFamily: FONT.SNIGLET,
  fontSize: "24px",
}

export default MainScene
