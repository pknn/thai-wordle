import { Histogram } from '../../../lib/stats/types'
import { isSolution, solution } from '../../../lib/word/guess'
import ModalContainer, { ContainerProps } from '../ModalContainer'
import HistogramChart from './HistogramChart/HistogramChart'
import {
  GameStatistics,
  loadStatisticsFromLocalStorage,
  saveStatisticsToLocalStorage,
} from '../../../lib/storage'
import { useEffect, useMemo } from 'react'

interface DataProps {
  submittedWords: string[]
}

type Props = DataProps & ContainerProps

const defaultStatictics: GameStatistics = {
  histogram: [0, 0, 0, 0, 0, 0],
  gamesFailed: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalGames: 0,
  successRate: 0,
}

const getUpdateStatictics = (hasWon: boolean, at: number): GameStatistics => {
  const { histogram, gamesFailed, currentStreak, bestStreak, totalGames } =
    loadStatisticsFromLocalStorage() || defaultStatictics
  const newHistogram = hasWon
    ? histogram.map((v, i) => (i === at ? v + 1 : v))
    : histogram
  const newGameFailed = hasWon ? gamesFailed : gamesFailed + 1
  const newCurrentStreak = hasWon ? currentStreak + 1 : currentStreak
  const newBestStreak = Math.max(newCurrentStreak, bestStreak)
  const newTotalGame = totalGames + 1
  const newSuccessRate = 100 - (newGameFailed / newTotalGame) * 100
  return {
    histogram: newHistogram as Histogram,
    gamesFailed: newGameFailed,
    currentStreak: newCurrentStreak,
    bestStreak: newBestStreak,
    totalGames: newTotalGame,
    successRate: newSuccessRate,
  }
}

const Summary = ({ shouldShow, onHide, submittedWords }: Props) => {
  const hasWon = useMemo(
    () => isSolution(submittedWords[submittedWords.length - 1]),
    submittedWords,
  )
  const updatedStatistics = useMemo(
    () => getUpdateStatictics(hasWon, submittedWords.length - 1),
    [submittedWords],
  )

  useEffect(() => {
    if (hasWon || submittedWords.length >= 6) {
      saveStatisticsToLocalStorage(updatedStatistics)
    }
  }, [submittedWords, hasWon])

  const resultText = hasWon ? (
    <div>
      <h1>
        คุณ <span className="text-green-500">ชนะ</span> ด้วยการทาย{' '}
        {submittedWords.length} ครั้ง
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
        <HistogramChart histogram={updatedStatistics.histogram} />
      </div>
    </ModalContainer>
  )
}

export default Summary
