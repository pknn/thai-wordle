import { CogIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import {
  getThreeMostFrequentWords,
  getWordsFrequency,
  saveWordsFrequency,
} from '../../../lib/collection/collection'
import { WordFrequency } from '../../../lib/collection/types'

interface DataProps {
  submittedWords: string[]
  isGameFinished: boolean
  isLoadedSolution: boolean
}

const OnlineStatistics = ({
  submittedWords,
  isGameFinished,
  isLoadedSolution,
}: DataProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [threeMostFrequentWord, setThreeMostFrequentWord] = useState<
    WordFrequency[]
  >([])
  const [mostGuessedWord, setMostGuessedWord] = useState<WordFrequency>()

  const fetchOnlineStatistics = async () => {
    setIsLoading(true)
    if (!isLoadedSolution) await saveWordsFrequency(submittedWords)
    const threeMostFrequentWords = await getThreeMostFrequentWords()
    const mostGuessedWords = await getWordsFrequency(submittedWords)
    setThreeMostFrequentWord(threeMostFrequentWords)
    setMostGuessedWord(mostGuessedWords[0])
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isGameFinished) return
    fetchOnlineStatistics()
  }, [isGameFinished])

  return !isLoading && threeMostFrequentWord.length > 0 && mostGuessedWord ? (
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
}

export default OnlineStatistics
