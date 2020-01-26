import { combineReducers, createStore, Store } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import game from "./game/game.reducer"
import { GameState } from "./game/game.props"

export interface GlobalState {
  game: GameState
}

const reducers = combineReducers<GlobalState>({
  game,
})

export default () => createStore(reducers, devToolsEnhancer({})) as Store
