import { GameStatus } from '../status'
import {
  loadStatisticsFromLocalStorage,
  saveStatisticsToLocalStorage,
} from '../storage'
import { ChartModel, GameStatistics, Histogram } from './types'

export const toChartModels = (histogram: Histogram): ChartModel[] => {
  const max = Math.max(...histogram)
  return histogram.map((v) => ({
    raw: v,
    percent: (v * 100) / max,
  }))
}

const defaultStatictics: GameStatistics = {
  histogram: [0, 0, 0, 0, 0, 0],
  gamesFailed: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalGames: 0,
  successRate: 0,
}

const getUpdateStatictics = (
  hasWon: boolean,
  at: number,
  shouldUpdate: boolean,
): GameStatistics => {
  const loadedStatistics = loadStatisticsFromLocalStorage() || defaultStatictics
  if (!shouldUpdate) return loadedStatistics
  const { histogram, gamesFailed, currentStreak, bestStreak, totalGames } =
    loadedStatistics
  const newHistogram = hasWon
    ? histogram.map((v, i) => (i === at ? v + 1 : v))
    : histogram
  const newGameFailed = hasWon ? gamesFailed : gamesFailed + 1
  const newCurrentStreak = hasWon ? currentStreak + 1 : currentStreak
  const newBestStreak = Math.max(newCurrentStreak, bestStreak)
  const newTotalGame = totalGames + 1
  const newSuccessRate = 100 - (newGameFailed / newTotalGame) * 100
  return {
    histogram: newHistogram as Histogram,
    gamesFailed: newGameFailed,
    currentStreak: newCurrentStreak,
    bestStreak: newBestStreak,
    totalGames: newTotalGame,
    successRate: newSuccessRate,
  }
}

export const getGameStatistics = () =>
  loadStatisticsFromLocalStorage() || defaultStatictics

export const getFinishedGameStatistics = (
  status: GameStatus,
  at: number,
  shouldUpdate: boolean,
): GameStatistics => {
  const updatedStatistics = getUpdateStatictics(
    status === 'won',
    at,
    shouldUpdate,
  )
  saveStatisticsToLocalStorage(updatedStatistics)
  return updatedStatistics
}
