import { solution } from '../../../lib/word/guess'
import ModalContainer, { ContainerProps } from '../ModalContainer'
import HistogramChart from './HistogramChart/HistogramChart'
import { memo, useEffect, useState } from 'react'
import { GameStatistics } from '../../../lib/stats/types'
import { GameStatus } from '../../../lib/status'
import StatisticWindow from './StatisticWindow'

interface DataProps {
  status: GameStatus
  wonAt: number
  gameStatistics: GameStatistics
}

type Props = DataProps & ContainerProps

const Summary = ({
  shouldShow,
  onHide,
  status,
  wonAt,
  gameStatistics,
}: Props) => {
  const resultText =
    status === 'won' ? (
      <div>
        <h1>
          คุณ <span className="text-green-500">ชนะ</span> ด้วยการทาย {wonAt + 1}{' '}
          ครั้ง
        </h1>
      </div>
    ) : (
      <div>
        <h1 className="text-xl">
          คุณ <span className="text-red-500">แพ้ !!!!!!</span>
        </h1>
        <h2 className="text-md">คำที่ถูกต้องคือ {solution}</h2>
      </div>
    )

  return (
    <ModalContainer shouldShow={shouldShow} onHide={onHide}>
      {resultText}
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
          <h2>สถิติ</h2>
          <HistogramChart histogram={gameStatistics.histogram} />
        </div>
      </div>
    </ModalContainer>
  )
}

export default memo(Summary)
