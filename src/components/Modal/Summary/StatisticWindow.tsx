interface Props {
  description: string
  factor: number
}

const StatisticWindow = ({ description, factor }: Props) => (
  <div>
    <div className="text-sm">{description}</div>
    <div className="text-lg">{factor}</div>
  </div>
)

export default StatisticWindow
