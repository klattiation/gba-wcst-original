import { CriteriaName, CardData } from "./game.props"

const BASE = "GAME"
export const PLAY_CARD = `${BASE}.PLAY_CARD`
export const RESET = `${BASE}.RESET`

export const playCard = (
  playedCard: CardData,
  stackCard: CardData,
  trump: CriteriaName
) => ({
  type: PLAY_CARD,
  payload: {
    playedCard,
    stackCard,
    trump,
  },
})

export const reset = () => ({
  type: RESET,
})
