import { CogIcon } from '@heroicons/react/solid'
import { useState, useEffect, useMemo } from 'react'
import {
  getThreeMostFrequentWords,
  getWordsFrequency,
  saveWordsFrequency,
} from '../../../lib/collection/collection'
import { WordFrequency } from '../../../lib/collection/types'
import { isSolution, solution } from '../../../lib/word/guess'
import MostFrequentWord from './MostFrequentWord'

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
  const submittedWordsNotSolution = useMemo(
    () => submittedWords.filter((word) => !isSolution(word)),
    [submittedWords],
  )

  const fetchOnlineStatistics = async () => {
    setIsLoading(true)
    if (!isLoadedSolution) await saveWordsFrequency(submittedWordsNotSolution)
    const threeMostFrequentWords = await getThreeMostFrequentWords(
      solution.word,
    )
    const mostGuessedWords = await getWordsFrequency(submittedWordsNotSolution)
    setThreeMostFrequentWord(threeMostFrequentWords)
    setMostGuessedWord(mostGuessedWords[0])
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isGameFinished) return
    fetchOnlineStatistics()
  }, [isGameFinished])

  return !isLoading ? (
    <>
      <div>
        <h1>คุณทายคำว่า</h1>
        <div className="flex justify-center items-end">
          <h1 className="text-xl">
            {mostGuessedWord?.word || submittedWords[0]}
          </h1>
        </div>
        <h1>
          {mostGuessedWord
            ? `เหมือนกับคนอีก ${mostGuessedWord?.frequency} คน`
            : 'เป็นคนแรก'}
        </h1>
      </div>
      <div>
        <h1>คำที่มีคนทายเยอะที่สุดในวันนี้</h1>
        <div className="flex justify-center items-end">
          {threeMostFrequentWord.length > 0 ? (
            threeMostFrequentWord.map((wordFrequency, index) => (
              <MostFrequentWord
                key={wordFrequency.word}
                word={wordFrequency.word}
                index={index}
              />
            ))
          ) : (
            <span className="text-sm">
              แป่ว! ยังไม่มีคนเล่นเลยจ้า ไปชวนเพื่อนๆมาเล่นกัน
            </span>
          )}
        </div>
      </div>
    </>
  ) : (
    <CogIcon className="animate-spin text-gray-400 w-8 h-8" />
  )
}

export default OnlineStatistics
