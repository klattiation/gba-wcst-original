import { ActionCreator, AnyAction } from "redux"

export enum CriteriaName {
  Category = "category",
  Design = "design",
  Channel = "channel",
  Value = "value",
  Price = "price",
}

export interface CriteriaValue {
  id: string
  label: string
}

export interface CriteriaAssignment {
  category: string
  channel: string
  design: string
  price: string
  value: string
}

export interface CardConfig extends CriteriaAssignment {
  image: string
}

export interface ResolvedCriteriaAssignment {
  category: CriteriaValue
  channel: CriteriaValue
  design: CriteriaValue
  price: CriteriaValue
  value: CriteriaValue
}

export interface ResolvedCard extends ResolvedCriteriaAssignment {
  image: string
}

export interface GameState {
  cardIndex: number // current round
  criteriaChanges: number[] // rounds where a trump criteria change happend
  criteriaOrderIndex: number // order in which categories are displayed
  criteriaTrumpIndex: number // category that is trump currently
  combo: number // the number of the last consecutive correct rounds
  scores: number[] // total scores at each round
  scoresPerRound: number[] // score per round at each round
}

export interface PlayCardPayload {
  avatarData: ResolvedCriteriaAssignment
  cardData: ResolvedCriteriaAssignment
  criteria: CriteriaName
}

export type PlayCardActionCreator = ActionCreator<
  AnyAction & { payload: PlayCardPayload }
>

export interface CardDragItem {
  data: ResolvedCard
}
