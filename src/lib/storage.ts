import { GameStatistics } from './stats/types'

const gameStateKey = 'gameState'

interface GameState {
  submittedWords: string[]
  solution: string
}

const tryParse = <T>(key: string): T | null => {
  const item = localStorage.getItem(key)
  return item ? (JSON.parse(item) as T) : null
}

export const saveGameStateToLocalStorage = (gameState: GameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = (): GameState | null =>
  tryParse<GameState>(gameStateKey)

const gameStatisticsKey = 'gameStatistics'

export const saveStatisticsToLocalStorage = (
  gameStatistics: GameStatistics,
) => {
  localStorage.setItem(gameStatisticsKey, JSON.stringify(gameStatistics))
}

export const loadStatisticsFromLocalStorage = (): GameStatistics | null =>
  tryParse<GameStatistics>(gameStatisticsKey)
