import get from "lodash/get"

interface GameResult {
  score: number
  criteriaChanges: number[]
}

// const API_BASE_URL = "http://localhost:3001"
const API_BASE_URL = "https://gba-wisconsin-masterarbeit.herokuapp.com"
const GAME_ID = "original"

const GAME_ROOT_ID = "game-root"

export const saveResultToInput = (res: GameResult) =>
  new Promise((resolve, reject) => {
    const gameRoot = document.getElementById(GAME_ROOT_ID)
    if (!gameRoot) {
      return reject()
    }
    const inputId = gameRoot.dataset.input as string
    const element = document.getElementById(inputId)
    if (!element) {
      return reject()
    }
    element.setAttribute("value", JSON.stringify(res))
    gameRoot.dispatchEvent(new CustomEvent("complete", { detail: res }))
    resolve()
  })

export const saveResult = async (result: GameResult) => {
  try {
    const res = await fetch(`${API_BASE_URL}/result`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        gameId: GAME_ID,
        ...result,
      }),
    })
    const resJson = await res.json()
    if (resJson.error) {
      throw new Error(
        get(
          resJson,
          "error.msg",
          "Saving results failed for some unknown reason..."
        )
      )
    }
    return true
  } catch (err) {
    // TODO: report to sentry
    console.warn(`An error occured while saving results.`)
    console.error(err)
    return false
  }
}

/**
 * Ping the Heroku app, so that it's already running when we
 * submit the game results.
 */
export const wakeUpApi = () => fetch(`${API_BASE_URL}`)
