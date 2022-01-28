import { useEffect, useState } from 'react'
import Alert from './components/Alert'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import { HowToPlay, Summary } from './components/Modal'
import { ModalName, ModalState } from './components/Modal/types'
import { Character } from './lib/keyboard/types'
import { isSolution, solution } from './lib/word/guess'
import { thaiLength } from './lib/word/helper'
import { isInWordList } from './lib/word/words'
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
} from './lib/storage'
import {
  getFinishedGameStatistics,
  getGameStatistics,
} from './lib/stats/helper'
import { GameStatus } from './lib/status'

const App = () => {
  const [wonAt, setWonAt] = useState(0)
  const [hasWon, setHasWon] = useState(false)
  const [status, setStatus] = useState<GameStatus>('play')
  const [submittedWords, setSubmittedWords] = useState<string[]>(() => {
    const maybeGameState = loadGameStateFromLocalStorage()
    if (!maybeGameState || maybeGameState.solution !== solution) return []
    return maybeGameState.submittedWords
  })
  const [currentWord, setCurrentWord] = useState('')
  const [gameStatistics, setGameStatistics] = useState(getGameStatistics())

  const [shouldShowAlert, setShouldShowAlert] = useState(false)
  const [modalState, setModalState] = useState<ModalState>({
    modal: 'HowToPlay',
    shouldShow: true,
  })

  const [isGodMode, setIsGodMode] = useState(false)

  useEffect(() => {
    const lastSubmittedWord = submittedWords[submittedWords.length - 1]
    if (status === 'play') {
      if (isSolution(lastSubmittedWord)) {
        setStatus('won')
      } else if (submittedWords.length >= 6) {
        setStatus('lost')
      }
    }
    if (
      (!hasWon && isSolution(lastSubmittedWord)) ||
      submittedWords.length >= 6
    ) {
      setWonAt(submittedWords.length - 1)
      setHasWon(true)
      setModalState({
        modal: 'Summary',
        shouldShow: true,
      })
    }
    saveGameStateToLocalStorage({ submittedWords, solution })
  }, [submittedWords])

  useEffect(() => {
    if (status === 'play') return
    setGameStatistics(getFinishedGameStatistics(status, wonAt))
  }, [status])

  const handlePress = (character: Character) => {
    if (thaiLength(currentWord + character) > 5) return

    setCurrentWord(currentWord + character)
  }

  const handleEnter = () => {
    if (currentWord === 'รักเดฟ') {
      setIsGodMode(true)
    } else if (isInWordList(currentWord)) {
      setSubmittedWords([...submittedWords, currentWord])
    } else {
      setShouldShowAlert(true)
    }
    setCurrentWord('')
  }

  const handleDelete = () => {
    setCurrentWord(currentWord.slice(0, currentWord.length - 1))
  }

  const handleShowModal = (modalName: ModalName) => {
    setModalState({
      modal: modalName,
      shouldShow: true,
    })
  }

  const handleHideModal = () => {
    setModalState({
      ...modalState,
      shouldShow: false,
    })
  }

  return (
    <div className="w-full h-screen">
      <div className="md:container px-4 py-8 md:px-4 md:max-w-3xl">
        <div className="px-4 flex justify-between">
          <div className="text-xl">ไทยเวิร์ดเดิล</div>
          <button onClick={() => handleShowModal('HowToPlay')}>?</button>
        </div>
        {isGodMode && <div className="px-4">คำวันนี้: {solution}</div>}
        <div className="relative">
          <Alert
            shouldShow={shouldShowAlert}
            onHide={() => setShouldShowAlert(false)}
          />
          <Grid submittedWords={submittedWords} currentWord={currentWord} />
        </div>
        <Keyboard
          onPress={handlePress}
          onEnter={handleEnter}
          onDelete={handleDelete}
        />
      </div>
      {modalState.modal === 'HowToPlay' ? (
        <HowToPlay
          shouldShow={modalState.shouldShow}
          onHide={handleHideModal}
        />
      ) : (
        <Summary
          shouldShow={modalState.shouldShow}
          onHide={handleHideModal}
          hasWon={hasWon}
          wonAt={wonAt}
          gameStatistics={gameStatistics}
        />
      )}
      <div className="flex absolute bottom-4 px-4 flex-row md:flex-col">
        <div className="text-xs">
          Credits: วิธีการเล่นได้แรงบันดาลใจ (ก๊อป?) มาจาก{' '}
          <a
            className="underline text-blue-400"
            href="https://thwordle.vercel.app/"
          >
            thwordle
          </a>{' '}
        </div>
      </div>
    </div>
  )
}
export default App
