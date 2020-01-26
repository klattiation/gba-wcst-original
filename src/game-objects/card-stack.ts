import { GameObjects, Scene } from "phaser"
import { CardProps } from "./card"
import Card from "./card"

class CardStack extends GameObjects.Container {
  constructor(private props: CardProps) {
    super(props.scene, props.x, props.y)

    const card = new Card({ ...props, x: 0, y: 0 })
    this.add(card)

    const zoneFactor = 2
    const bounds = card.getBounds()
    const zone = new GameObjects.Zone(
      props.scene,
      0,
      0,
      bounds.width * zoneFactor,
      bounds.height * zoneFactor
    )
    zone.setOrigin(card.originX, card.originY)
    zone.setRectangleDropZone(
      bounds.width * zoneFactor,
      bounds.height * zoneFactor
    )
    this.add(zone)
  }

  get cardData() {
    return this.props.data
  }
}

export default CardStack
