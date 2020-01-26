import { CriteriaName, CardData } from "./game.props"

const BASE = "GAME"
export const PLAY_CARD = `${BASE}.PLAY_CARD`
export const RESET = `${BASE}.RESET`

export const playCard = (
  playerCard: CardData,
  stackCard: CardData,
  criteria: CriteriaName
) => ({
  type: PLAY_CARD,
  payload: {
    playerCard,
    stackCard,
    criteria,
  },
})

export const reset = () => ({
  type: RESET,
})
