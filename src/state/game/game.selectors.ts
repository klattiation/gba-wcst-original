import { GlobalState as GS } from "../create-store"
import { createSelector } from "reselect"
import { PLAYER_CARDS, TRUMP_LIST } from "./game.state"
import first from "lodash/first"
import last from "lodash/last"
import { CardData } from "./game.props"

export const getRound = (state: GS) => state.game.round

const getTrumpIndex = (state: GS) => state.game.criteriaTrumpIndex

export const getScore = (state: GS) => last(state.game.scores) || 0

export const getInitialScore = (state: GS) => first(state.game.scores) || 0

export const getCriteriaChanges = (state: GS) => state.game.criteriaChanges

export const getRoundScore = (state: GS) =>
  last(state.game.scoresPerRound) || null

export const getScoreHistory = (state: GS) => state.game.scores

export const getTrumpCriteria = createSelector(
  getTrumpIndex,
  trumpIdx => TRUMP_LIST[trumpIdx % TRUMP_LIST.length]
)

export const getCurrentCard = createSelector<GS, number, CardData | undefined>(
  getRound,
  round => PLAYER_CARDS[round]
)

export const getIsGameComplete = createSelector(
  getRound,
  round => round >= PLAYER_CARDS.length
)

export const getGameResults = createSelector(
  getScore,
  getCriteriaChanges,
  (score, criteriaChanges) => ({
    score,
    criteriaChanges,
  })
)
