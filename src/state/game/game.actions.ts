import { ResolvedCriteriaAssignment, CriteriaName } from "./game.props"

const BASE = "GAME"
export const PLAY_CARD = `${BASE}.PLAY_CARD`
export const RESET = `${BASE}.RESET`

export const playCard = (
  avatarData: ResolvedCriteriaAssignment,
  cardData: ResolvedCriteriaAssignment,
  criteria: CriteriaName
) => ({
  type: PLAY_CARD,
  payload: {
    avatarData,
    cardData,
    criteria,
  },
})

export const reset = () => ({
  type: RESET,
})
