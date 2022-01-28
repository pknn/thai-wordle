import { ChartModel, Histogram } from './types'

export const toChartModels = (histogram: Histogram): ChartModel[] => {
  const max = Math.max(...histogram)
  return histogram.map((v) => ({
    raw: v,
    percent: (v * 100) / max,
  }))
}
