import { GameObjects, Scene, Tweens } from "phaser"
import { ATLAS } from "../constants"
import { stopTween } from "../utils"
import { CardData } from "../state/game/game.props"

export interface CardProps {
  data: CardData
  scene: Scene
  x: number
  y: number
}

export enum CardDataKey {
  CARD_DATA = "cardData",
}

class Card extends GameObjects.Sprite {
  private tween: Tweens.Tween | undefined

  constructor(props: CardProps) {
    super(props.scene, props.x, props.y, ATLAS.LEVEL, getFrame(props.data))
    this.setData(CardDataKey.CARD_DATA, props.data)
    this.setOrigin(0.5)
  }

  updateCardData(cardData: CardData) {
    this.setData(CardDataKey.CARD_DATA, cardData)
    this.setFrame(getFrame(cardData))
  }

  activateDnd() {
    this.setInteractive({ useHandCursor: true })
    this.scene.input.setDraggable(this)
    this.scene.input.on("dragstart", this.handleDragStart)
    this.scene.input.on("drag", this.handleDrag)
  }

  animateDragOver() {}

  animateDragOut() {}

  show(delay = 0) {
    stopTween(this.tween)
    this.setAlpha(0)
    this.setScale(0.5)
    this.setVisible(true)
    return new Promise(resolve => {
      this.tween = this.scene.tweens.add({
        targets: this,
        props: {
          alpha: 1,
          scale: 1,
        },
        delay,
        duration: 300,
        ease: "Back.easeOut",
        onComplete: resolve,
      })
    })
  }

  private handleDragStart = (pointer: any, gameObject: GameObjects.Sprite) => {
    this.scene.children.bringToTop(gameObject)
  }

  private handleDrag = (
    pointer: any,
    gameObject: GameObjects.Sprite,
    dragX: number,
    dragY: number
  ) => {
    gameObject.x = dragX
    gameObject.y = dragY
  }
}

const getFrame = (data: CardData) => {
  const { shape, color, eyes } = data
  return `${shape}${eyes}${color}.png`
}

export default Card
