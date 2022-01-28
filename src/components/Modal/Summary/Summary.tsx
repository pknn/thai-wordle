import { Histogram } from '../../../lib/stats/types'
import { isSolution, solution } from '../../../lib/word/guess'
import ModalContainer, { ContainerProps } from '../ModalContainer'
import HistogramChart from './HistogramChart/HistogramChart'

interface DataProps {
  submittedWord: string[]
  histogram: Histogram
}

type Props = DataProps & ContainerProps

const Summary = ({ shouldShow, onHide, submittedWord, histogram }: Props) => {
  const hasWon = isSolution(submittedWord[submittedWord.length - 1])
  const resultText = hasWon ? (
    <div>
      <h1>
        <span className="text-green-500">ชนะ</span>ด้วยการทาย{' '}
        {submittedWord.length} ครั้ง
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
        <HistogramChart histogram={histogram} />
      </div>
    </ModalContainer>
  )
}

export default Summary
