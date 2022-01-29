import ModalContainer, { ContainerProps } from '../ModalContainer'
import HistogramChart from './HistogramChart/HistogramChart'
import { memo } from 'react'
import { GameStatistics } from '../../../lib/stats/types'
import { GameStatus } from '../../../lib/status'
import StatisticWindow from './StatisticWindow'

interface DataProps {
  status: GameStatus
  wonAt: number
  gameStatistics: GameStatistics
}

type Props = DataProps & ContainerProps

const Summary = ({ shouldShow, onHide, gameStatistics }: Props) => (
  <ModalContainer shouldShow={shouldShow} onHide={onHide}>
    <h2>สถิติ</h2>
    <div className="my-4">
      <div className="px-4 flex justify-between my-4">
        <StatisticWindow
          description="การเล่น"
          factor={gameStatistics.totalGames}
        />
        <StatisticWindow
          description="ร้อยละ"
          factor={gameStatistics.successRate}
        />
        <StatisticWindow
          description="ชนะต่อ"
          factor={gameStatistics.currentStreak}
        />
        <StatisticWindow
          description="ชนะต่อมาก"
          factor={gameStatistics.bestStreak}
        />
      </div>
      <div>
        <HistogramChart histogram={gameStatistics.histogram} />
      </div>
    </div>
  </ModalContainer>
)

export default memo(Summary)
