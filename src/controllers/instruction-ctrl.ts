import { EVENTS } from "../constants"
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
    text: `Um Kosten gering zu halten und die Inhalte unserer Werbekampagnen noch effizienter gestalten zu können, sollen sich unsere Marketingkampagnen zukünftig nur an jeweils eine ausgewählte Zielgruppe richten.`,
    buttonText: `Weiter`,
  },
  {
    text: `Hier ein Überblick über unsere wichtigsten Zielgruppen...`,
    buttonText: `Weiter`,
  },
  {
    text: `Wie du sehen kannst, haben die Zielgruppen unterschiedliche Präferenzen bezüglich des Kommunikationskanals, der Produktkategorie, der Preisgestaltung, des Produktdesigns und ihrer Werte.`,
    buttonText: `Weiter`,
  },
  {
    text: `Deine Aufagbe ist es, jedes der folgenden Produkte derjenigen Zielgruppe zuzuordnen, die dir dafür am geeignetsten erscheint.`,
    buttonText: `Weiter`,
  },
  {
    text: `Aufgrund der unterschiedlichen Ansprüche und Bedürfnisse ist es nicht immer offensichtlich, welche Zielgruppe am besten angesprochen werden sollte.`,
    buttonText: `Weiter`,
  },
  {
    text: `Im Anschluss an jede Zuordnung erfährst du, ob du mit deiner Marketingkampagne einen Gewinn oder Verlust erzielt hast. Dadurch kannst du erkennen, welche Strategie erfolgbringend ist.`,
    buttonText: `Weiter`,
  },
  {
    text: `Sei dir jedoch bewusst, dass sich Kundenbedürfnisse auch manchmal ändern können und dann eine neue Strategie erfordern!`,
    buttonText: `Weiter`,
  },
  {
    text: `Den aktuellen Stand deiner Ausgaben/Einnahmen wird dir rechts unten angezeigt. Du startest mit einem Budget von 10.000€. Das Ziel ist natürlich, den Gewinn zu maximieren.`,
    buttonText: `Los geht's!`,
  },
  {
    event: EVENTS.START_GAME,
    text: `Ordne nun die Produkte der passenden Zielgruppe zu.`,
  },
]
