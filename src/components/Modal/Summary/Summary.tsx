import { ShareIcon, CogIcon } from '@heroicons/react/solid'
import ModalContainer, { ContainerProps } from '../ModalContainer'
import HistogramChart from './HistogramChart/HistogramChart'
import React, { memo, useEffect, useState } from 'react'
import { GameStatistics } from '../../../lib/stats/types'
import StatisticWindow from './StatisticWindow'
import { getTimeLeft } from '../../../lib/time'
import { WordFrequency } from '../../../lib/collection/types'
import {
  getThreeMostFrequentWords,
  getWordsFrequency,
} from '../../../lib/collection/collection'

interface DataProps {
  gameStatistics: GameStatistics
  shouldShowShareButton: boolean
  submittedWords: string[]
}

interface ActionProps {
  onShare: () => void
}

type Props = DataProps & ActionProps & ContainerProps

const Summary = ({
  shouldShow,
  onHide,
  gameStatistics,
  shouldShowShareButton,
  submittedWords,
  onShare,
}: Props) => {
  const [isCopied, setIsCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft())
  const [isLoading, setIsLoading] = useState(false)
  const [threeMostFrequentWord, setThreeMostFrequentWord] = useState<
    WordFrequency[]
  >([])
  const [mostGuessedWord, setMostGuessedWord] = useState<WordFrequency>()

  const handleOnShare = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
    event.stopPropagation()
    onShare()
  }

  useEffect(() => {
    setIsLoading(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const fetchOnlineStatistics = async () => {
    setIsLoading(true)
    const threeMostFrequentWords = await getThreeMostFrequentWords()
    const mostGuessedWords = await getWordsFrequency(submittedWords)
    setThreeMostFrequentWord(threeMostFrequentWords)
    setMostGuessedWord(mostGuessedWords[0])
    setIsLoading(false)
  }

  useEffect(() => {
    if (!shouldShowShareButton) return
    fetchOnlineStatistics()
  }, [shouldShowShareButton])

  const onlineStatistics =
    !isLoading && threeMostFrequentWord.length > 0 && mostGuessedWord ? (
      <>
        <div>
          <h1>คุณทายคำว่า</h1>
          <div className="flex justify-center items-end">
            <h1 className="text-xl">{mostGuessedWord?.word}</h1>
          </div>
          <h1>เหมือนกับคนอีก {mostGuessedWord?.frequency} คน</h1>
        </div>
        <div>
          <h1>คำที่มีคนทายเยอะที่สุดในวันนี้</h1>
          <div className="flex justify-center items-end">
            <div className="order-2">
              <span>{threeMostFrequentWord[0].word}</span>
              <div className="h-10 w-16 bg-yellow-400"></div>
            </div>
            <div>
              <span>{threeMostFrequentWord[1].word}</span>
              <div className="h-6 w-16 bg-yellow-400"></div>
            </div>
            <div className="order-3">
              <span>{threeMostFrequentWord[2].word}</span>
              <div className="h-4 w-16 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <CogIcon className="animate-spin text-gray-400 w-8 h-8" />
    )

  return (
    <ModalContainer shouldShow={shouldShow} onHide={onHide}>
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
        {shouldShowShareButton && (
          <div className="flex flex-col gap-6 items-center">
            {onlineStatistics}
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
