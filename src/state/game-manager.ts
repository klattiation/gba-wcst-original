import { Events } from "phaser"
import { Store, Unsubscribe, AnyAction } from "redux"
import { GlobalState } from "./create-store"

export enum GameEvent {
  STORE_UPDATE = "STORE_UPDATE",
}

class GameManager {
  private event: Events.EventEmitter = new Events.EventEmitter()
  private unsubscribe: Unsubscribe

  constructor(public store: Store) {
    this.unsubscribe = store.subscribe(this.handleStoreChanged)
  }

  kill() {
    this.unsubscribe()
    this.event.destroy()
  }

  dispatch(action: AnyAction) {
    return this.store.dispatch(action)
  }

  on(event: GameEvent, fn: Function, context?: any) {
    this.event.on(event, fn, context)
  }

  off(event: GameEvent, fn: Function, context?: any, once?: boolean) {
    this.event.off(event, fn, context, once)
  }

  once(event: GameEvent, fn: Function, context?: any) {
    this.event.once(event, fn, context)
  }

  get state(): GlobalState {
    return this.store.getState()
  }

  private handleStoreChanged = () => {
    this.event.emit(GameEvent.STORE_UPDATE, this.store.getState())
  }
}

export default GameManager
