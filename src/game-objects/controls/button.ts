import { GameObjects, Scene, Tweens } from "phaser"
import { FONT, COLOR } from "../../constants"
import { tickStep } from "d3-array"

interface ButtonProps {
  scene: Scene
  text?: string
  x?: number
  y?: number
  onClick?: (btn: Button) => void
}

const FONT_STYLE = {
  fontFamily: FONT.SNIGLET,
  fontSize: "24px",
  color: COLOR.PETROL,
}

export enum BUTTON_EVENT {
  CLICK = "click",
}

class Button extends GameObjects.Container {
  private bg: GameObjects.Graphics
  private label: GameObjects.Text
  private tween: Tweens.Tween | undefined
  private onClick?: (btn: Button) => void

  constructor(props: ButtonProps) {
    super(props.scene, props.x, props.y)

    this.label = this.createLabel(props.scene, props.text)
    this.bg = this.renderBg(new GameObjects.Graphics(this.scene))
    this.onClick = props.onClick

    this.add(this.bg)
    this.add(this.label)
    this.enable(true)
  }

  setText = (text?: string) => {
    this.label.setText(text || "")
    this.renderBg(this.bg)
  }

  getWidth() {
    return this.getBounds().width
  }

  enable(flag: boolean) {
    if (flag) {
      this.label.setInteractive({ useHandCursor: true })
      this.setAlpha(1)
    } else {
      this.label.removeInteractive()
      this.setAlpha(0.5)
    }
  }

  private handlePointerDown = () => {
    this.animate(0.9)
  }

  private handlePointerUp = () => {
    this.animate(1.1)
    this.emit(BUTTON_EVENT.CLICK)
    this.onClick?.call(this, this)
  }

  private handlePointerOver = () => {
    this.animate(1.1)
  }

  private handlePointerOut = () => {
    this.animate(1)
  }

  private animate(scale: number) {
    if (this.tween && this.tween.isPlaying) {
      this.tween.stop()
    }
    this.tween = this.scene.tweens.add({
      targets: this,
      props: {
        scale: { value: scale },
      },
      duration: 100,
      ease: "Sine.easeOut",
    })
  }

  private renderBg(rect: GameObjects.Graphics) {
    const borderRadius = 10
    const width = this.label.width + 32
    const height = 42
    rect.fillStyle(0xffffff)
    rect.fillRoundedRect(-width / 2, -height / 2, width, height, borderRadius)
    return rect
  }

  private createLabel(scene: Scene, text = "") {
    const label = new GameObjects.Text(scene, 0, 0, text, FONT_STYLE)
    label.setOrigin(0.5)
    label.on("pointerdown", this.handlePointerDown, this)
    label.on("pointerup", this.handlePointerUp, this)
    label.on("pointerover", this.handlePointerOver, this)
    label.on("pointerout", this.handlePointerOut, this)
    return label
  }
}

export default Button
