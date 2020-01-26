import { GameObjects, Scene } from "phaser"
import { COLOR, FONT } from "../constants"

interface FeedbackLabelProps {
  scene: Scene
}

const fontStyle = {
  color: COLOR.WHITE,
  fontFamily: FONT.SNIGLET,
  fontSize: "30px",
}

class FeedbackLabel extends GameObjects.Container {
  private label: GameObjects.Text
  constructor(props: FeedbackLabelProps) {
    super(props.scene)

    this.label = new GameObjects.Text(props.scene, 0, 0, "", fontStyle)
    this.label.setOrigin(0.5)
    this.add(this.label)
    this.hide()
  }

  hide() {
    this.setVisible(false)
  }

  show(isCorrect: boolean, x: number, y: number) {
    this.setVisible(true)
    this.setPosition(x, y)
    if (isCorrect) {
      this.label.setText("Richtig")
      this.label.setColor("#0a0")
    } else {
      this.label.setText("Falsch")
      this.label.setColor("#a00")
    }
  }
}

export default FeedbackLabel
