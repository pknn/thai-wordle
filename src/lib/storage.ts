import { Histogram } from './stats/types'

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

export interface GameStatistics {
  histogram: Histogram
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatisticsToLocalStorage = (
  gameStatistics: GameStatistics,
) => {
  localStorage.setItem(gameStatisticsKey, JSON.stringify(gameStatistics))
}

export const loadStatisticsFromLocalStorage = (): GameStatistics | null =>
  tryParse<GameStatistics>(gameStatisticsKey)
