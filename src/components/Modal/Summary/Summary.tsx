import { solution } from '../../../lib/word/guess'
import ModalContainer, { ContainerProps } from '../ModalContainer'
import HistogramChart from './HistogramChart/HistogramChart'
import { memo } from 'react'
import { GameStatistics } from '../../../lib/stats/types'

interface DataProps {
  hasWon: boolean
  wonAt: number
  gameStatistics: GameStatistics
}

type Props = DataProps & ContainerProps

const Summary = ({
  shouldShow,
  onHide,
  hasWon,
  wonAt,
  gameStatistics: gameStatictics,
}: Props) => {
  const resultText = hasWon ? (
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
        <h2>สถิติ</h2>
        <HistogramChart histogram={gameStatictics.histogram} />
      </div>
    </ModalContainer>
  )
}

export default memo(Summary)
