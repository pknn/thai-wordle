import { toChartModels } from '../../../../lib/stats/helper'
import { Histogram } from '../../../../lib/stats/types'
import Row from './Row'

interface Props {
  histogram: Histogram
}

const HistogramChart = ({ histogram }: Props) => (
  <div className="flex flex-col gap-2 my-1">
    {toChartModels(histogram).map((model, i) => (
      <Row key={i} chartModel={model} index={i + 1} />
    ))}
  </div>
)

export default HistogramChart
