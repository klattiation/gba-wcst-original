import { ActionCreator, AnyAction } from "redux"

export enum CriteriaName {
  COLOR = "color",
  EYES = "eyes",
  SHAPE = "shape",
}

export enum CardColor {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
}

export enum CardEyes {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
}

export enum CardShape {
  CIRCLE = "circle",
  CROSS = "cross",
  STAR = "star",
  TRIANGLE = "triangle",
}

// attributes must contain all CriteriaName enum values
export interface CardData {
  color: CardColor
  eyes: CardEyes
  shape: CardShape
}

export interface GameState {
  round: number // current round
  criteriaChanges: number[] // rounds where a trump criteria change happend
  criteriaOrderIndex: number // order in which categories are displayed
  criteriaTrumpIndex: number // category that is trump currently
  combo: number // the number of the last consecutive correct rounds
  scores: number[] // total scores at each round
  scoresPerRound: number[] // score per round at each round
}

export interface PlayCardPayload {
  isCorrect: boolean
}

export type PlayCardActionCreator = ActionCreator<
  AnyAction & { payload: PlayCardPayload }
>

export interface CardDragItem {
  data: CardData
}
