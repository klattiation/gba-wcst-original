import { CriteriaName, CardData } from "./game.props"

const BASE = "GAME"
export const PLAY_CARD = `${BASE}.PLAY_CARD`
export const RESET = `${BASE}.RESET`

export const playCard = (isCorrect: boolean) => ({
  type: PLAY_CARD,
  payload: { isCorrect },
})

export const reset = () => ({
  type: RESET,
})
