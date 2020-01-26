import { GameObjects, Scene, Tweens } from "phaser"
import { ATLAS } from "../../constants"
import { ResolvedCriteriaAssignment } from "../../state/game/game.props"
import { stopTween } from "../../utils"

const { Sprite, Zone } = GameObjects

interface CardProps {
  avatarId: string
  data: ResolvedCriteriaAssignment
  scene: Scene
  x: number
  y: number
}

class Card extends GameObjects.Container {
  private sprite: GameObjects.Sprite
  private zone: GameObjects.Zone
  private tween: Tweens.Tween | undefined

  constructor(private props: CardProps) {
    super(props.scene, props.x, props.y)

    const { data, scene, avatarId } = props
    this.setData(data)

    this.sprite = new Sprite(scene, 0, 0, ATLAS.LEVEL)
    this.sprite.setInteractive()
    this.add(this.sprite)

    const bounds = this.sprite.getBounds()

    this.zone = new Zone(scene, 0, 0, bounds.width, bounds.height)
    this.zone.setOrigin(this.sprite.originX, this.sprite.originY)
    this.zone.setRectangleDropZone(bounds.width, bounds.height)
    this.add(this.zone)
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
}

export default Card
