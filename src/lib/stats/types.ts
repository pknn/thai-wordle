export type Histogram = [number, number, number, number, number, number]

export interface ChartModel {
  raw: number
  percent: number
}

export interface GameStatistics {
  histogram: Histogram
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}
