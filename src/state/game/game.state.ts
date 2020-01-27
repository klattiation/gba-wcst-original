import {
  CriteriaName,
  GameState,
  CardData,
  CardColor,
  CardShape,
} from "./game.props"

const { COLOR, EYES, SHAPE } = CriteriaName
const { STAR, TRIANGLE, CIRCLE, CROSS } = CardShape
const { RED, BLUE, YELLOW, GREEN } = CardColor

export const INITIAL_SCORE = 0
export const SCORE_WIN = 1
export const SCORE_LOSE = -1
export const CRITERIA_CHANGE_THRESHOLD = 10

export const PLAYER_CARDS: CardData[] = [
  { shape: STAR, eyes: 2, color: YELLOW },
  { shape: STAR, eyes: 1, color: RED },
  { shape: TRIANGLE, eyes: 1, color: YELLOW },
  { shape: STAR, eyes: 1, color: GREEN },
  { shape: STAR, eyes: 1, color: BLUE },
  { shape: CIRCLE, eyes: 1, color: BLUE },
  { shape: STAR, eyes: 2, color: RED },
  { shape: CIRCLE, eyes: 2, color: RED },
  { shape: TRIANGLE, eyes: 2, color: YELLOW },
  { shape: CIRCLE, eyes: 4, color: GREEN },
  { shape: TRIANGLE, eyes: 4, color: GREEN },
  { shape: TRIANGLE, eyes: 3, color: GREEN },
  { shape: CROSS, eyes: 3, color: GREEN },
  { shape: CROSS, eyes: 4, color: GREEN },
  { shape: TRIANGLE, eyes: 1, color: GREEN },
  { shape: CROSS, eyes: 1, color: BLUE },
  { shape: CIRCLE, eyes: 3, color: RED },
  { shape: TRIANGLE, eyes: 2, color: BLUE },
  { shape: CIRCLE, eyes: 4, color: YELLOW },
  { shape: STAR, eyes: 2, color: BLUE },
  { shape: STAR, eyes: 4, color: GREEN },
  { shape: STAR, eyes: 4, color: BLUE },
  { shape: CROSS, eyes: 3, color: RED },
  { shape: CIRCLE, eyes: 4, color: RED },
  { shape: CROSS, eyes: 1, color: RED },
  { shape: TRIANGLE, eyes: 3, color: BLUE },
  { shape: CROSS, eyes: 2, color: GREEN },
  { shape: TRIANGLE, eyes: 1, color: BLUE },
  { shape: TRIANGLE, eyes: 1, color: RED },
  { shape: CIRCLE, eyes: 4, color: BLUE },
  { shape: CROSS, eyes: 4, color: YELLOW },
  { shape: CROSS, eyes: 3, color: YELLOW },
  { shape: CROSS, eyes: 2, color: RED },
  { shape: CIRCLE, eyes: 3, color: BLUE },
  { shape: TRIANGLE, eyes: 4, color: YELLOW },
  { shape: STAR, eyes: 1, color: YELLOW },
  { shape: TRIANGLE, eyes: 4, color: RED },
  { shape: TRIANGLE, eyes: 3, color: RED },
  { shape: CROSS, eyes: 1, color: YELLOW },
  { shape: CIRCLE, eyes: 1, color: GREEN },
  { shape: CROSS, eyes: 2, color: YELLOW },
  { shape: CIRCLE, eyes: 2, color: BLUE },
  { shape: STAR, eyes: 3, color: GREEN },
  { shape: CIRCLE, eyes: 3, color: GREEN },
  { shape: CROSS, eyes: 4, color: BLUE },
  { shape: STAR, eyes: 4, color: RED },
  { shape: CROSS, eyes: 4, color: RED },
  { shape: STAR, eyes: 2, color: GREEN },
  { shape: CROSS, eyes: 2, color: BLUE },
  { shape: CIRCLE, eyes: 2, color: GREEN },
  { shape: CIRCLE, eyes: 3, color: YELLOW },
  { shape: TRIANGLE, eyes: 4, color: BLUE },
  { shape: TRIANGLE, eyes: 2, color: RED },
  { shape: STAR, eyes: 3, color: BLUE },
  { shape: STAR, eyes: 3, color: YELLOW },
  { shape: CIRCLE, eyes: 1, color: YELLOW },
  { shape: TRIANGLE, eyes: 3, color: YELLOW },
  { shape: STAR, eyes: 3, color: RED },
  { shape: CIRCLE, eyes: 2, color: YELLOW },
  { shape: CROSS, eyes: 1, color: GREEN },
  { shape: CIRCLE, eyes: 3, color: GREEN },
  { shape: STAR, eyes: 4, color: RED },
  { shape: STAR, eyes: 2, color: RED },
  { shape: CROSS, eyes: 1, color: BLUE },
]

export const EXAMPLE_CARD: CardData = {
  shape: TRIANGLE,
  eyes: 1,
  color: BLUE,
}

export const STACK: CardData[] = [
  { shape: CIRCLE, eyes: 1, color: RED },
  { shape: TRIANGLE, eyes: 2, color: GREEN },
  { shape: CROSS, eyes: 3, color: BLUE },
  { shape: STAR, eyes: 4, color: YELLOW },
]

export const TRUMP_LIST = [SHAPE, EYES, COLOR, SHAPE, EYES, COLOR]

export const getInitialState = (): GameState => ({
  round: 0,
  criteriaChanges: [],
  criteriaOrderIndex: 0,
  criteriaTrumpIndex: 0,
  combo: 0,
  scores: [INITIAL_SCORE],
  scoresPerRound: [],
})
