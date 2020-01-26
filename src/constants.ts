export enum ATLAS {
  LEVEL = "level",
}

export enum COLOR {
  PETROL = "#448f99",
  DARK_BLUE = "#092138",
  WHITE = "#ffffff",
}

export enum SCENE {
  MAIN = "MainScene",
  HUD = "HUDScene",
}

export enum FONT {
  BALOO = "Baloo",
  SNIGLET = "Sniglet",
}

export enum EVENTS {
  START_GAME = "startGame",
}

export const ASSET_PATH = "assets/atlases"

export const INITIAL_SCORE = 10000
export const GAME_WIDTH = 1600
export const GAME_HEIGHT = 900
export const GAME_CENTER = new Phaser.Geom.Point(
  GAME_WIDTH / 2,
  GAME_HEIGHT / 2
)
