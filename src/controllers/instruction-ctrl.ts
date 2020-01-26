import { EVENTS } from "../constants"
import { PLAYER_CARDS } from "../state/game/game.state"
import { Scene } from "phaser"

export class InstructionController {
  private idx = 0

  constructor(private scene: Scene) {}

  next() {
    if (this.idx >= instructions.length) {
      return instructions[instructions.length - 1]
    }
    this.idx++

    const { event } = this.instruction
    if (event) {
      this.scene.events.emit(event)
    }

    return instructions[this.idx] || null
  }

  get instruction() {
    return instructions[this.idx]
  }
}

const instructions = [
  {
    text: `Bei der folgenden Aufgabe sollst du Karten nach verschiedenen Regeln (Farbe, Form, Anzahl) zu einer von vier Referenzkarten zuordnen. Nach jeder Zuordnung erhältst du eine Rückmeldung, ob diese korrekt oder falsch war. Wenn deine Zuordnung nicht richtig war, solltest du eine andere Regel ausprobieren.`,
    buttonText: `Weiter`,
  },
  {
    event: EVENTS.SHOW_EXAMPLE,
    text: `Hier ein Beispiel zur Verdeutlichung:\r\nWenn du nach Farbe sortierst, würdest du auf die erste Karte klicken. Wenn du nach Form sortierst, würdest du die zweite Karte auswählen. Wenn du nach Anzahl sortierst, würdest du die dritte Karte anklicken. Ob du nach der richtigen Regel sortierst, erkennst du anhand des Feedbacks.`,
    buttonText: `Weiter`,
  },
  {
    text: `Es gibt insgesamt ${PLAYER_CARDS.length} Durchgänge.`,
    buttonText: `Los geht's!`,
  },
  {
    text: ``,
  },
]
