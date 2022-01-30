import { ShareIcon } from '@heroicons/react/solid'
import ModalContainer, { ContainerProps } from '../ModalContainer'
import HistogramChart from './HistogramChart/HistogramChart'
import React, { memo, useEffect, useState } from 'react'
import { GameStatistics } from '../../../lib/stats/types'
import StatisticWindow from './StatisticWindow'
import { getTimeLeft } from '../../../lib/time'
import OnlineStatistics from './OnlineStatistics'
import Solution from './Solution'

interface DataProps {
  gameStatistics: GameStatistics
  isGameFinished: boolean
  submittedWords: string[]
  isLoadedSolution: boolean
}

interface ActionProps {
  onShare: () => void
}

type Props = DataProps & ActionProps & ContainerProps

const Summary = ({
  shouldShow,
  onHide,
  gameStatistics,
  isGameFinished,
  submittedWords,
  isLoadedSolution,
  onShare,
}: Props) => {
  const [isCopied, setIsCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft())

  const handleOnShare = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
    event.stopPropagation()
    onShare()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ModalContainer shouldShow={shouldShow} onHide={onHide}>
      <Solution submittedWords={submittedWords} />
      <h2 className="text-lg">สถิติ</h2>
      <div className="my-4">
        <div className="px-4 flex justify-between my-4">
          <StatisticWindow
            description="การเล่น"
            factor={gameStatistics.totalGames}
          />
          <StatisticWindow
            description="ร้อยละ"
            factor={Math.round(gameStatistics.successRate * 100) / 100}
          />
          <StatisticWindow
            description="ชนะติดต่อ"
            factor={gameStatistics.currentStreak}
          />
          <StatisticWindow
            description="ดีที่สุด"
            factor={gameStatistics.bestStreak}
          />
        </div>
        <div>
          <HistogramChart histogram={gameStatistics.histogram} />
        </div>
        {isGameFinished && (
          <div className="flex flex-col gap-6 items-center">
            <OnlineStatistics
              submittedWords={submittedWords}
              isGameFinished={isGameFinished}
              isLoadedSolution={isLoadedSolution}
            />
            <div>
              <button
                className="p-4 bg-blue-500 hover:bg-blue-600 rounded text-white"
                onClickCapture={handleOnShare}
              >
                {isCopied ? 'คัดลอกแล้ว' : 'ส่งต่อ'}{' '}
                <ShareIcon className="h-5 w-5 text-white inline-block" />
              </button>
            </div>
            <div className="text-sm">
              มาเล่นคำใหม่ภายใน {timeLeft.format('HH:mm:ss')}
            </div>
          </div>
        )}
      </div>
    </ModalContainer>
  )
}

export default memo(Summary)
