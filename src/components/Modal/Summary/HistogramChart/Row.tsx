import { ChartModel } from '../../../../lib/stats/types'

interface Props {
  chartModel: ChartModel
  index: number
}

const Row = ({ chartModel, index }: Props) => (
  <div className="flex">
    <div className="w-6">{index}</div>
    <div
      className="flex bg-green-400 text-xs justify-end items-center pr-2"
      style={{ width: `${chartModel.percent}%` }}
    >
      {chartModel.raw > 0 && chartModel.raw}
    </div>
  </div>
)

export default Row
