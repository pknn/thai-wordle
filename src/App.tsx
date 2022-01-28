import { useState } from 'react'
import Alert from './components/Alert'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import Modal from './components/Modal'
import { ModalName, ModalState } from './components/Modal/types'
import { Character } from './lib/keyboard/types'
import { thaiLength } from './lib/word/helper'
import { getSolution, isInWordList } from './lib/word/words'

const App = () => {
  const [submittedWord, setSubmittedWord] = useState<string[]>([])
  const [currentWord, setCurrentWord] = useState('')

  const [shouldShowAlert, setShouldShowAlert] = useState(false)
  const [modalState, setModalState] = useState<ModalState>({
    shouldShow: true,
    modal: 'HowToPlay',
  })

  const handlePress = (character: Character) => {
    if (thaiLength(currentWord + character) > 5) return

    setCurrentWord(currentWord + character)
  }

  const handleEnter = () => {
    if (!isInWordList(currentWord)) {
      setShouldShowAlert(true)
      return
    }

    setSubmittedWord([...submittedWord, currentWord])
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
    <div className="w-full h-full">
      <div className="md:container p-4 md:px-4 md:max-w-3xl">
        <div className="px-4 flex justify-between">
          <div className="text-xl">ไทยเวิร์ดเดิล</div>
          <button onClick={() => handleShowModal('HowToPlay')}>?</button>
        </div>
        <div>คำวันนี้: {getSolution()}</div>
        <div className="relative">
          <Alert
            shouldShow={shouldShowAlert}
            onHide={() => setShouldShowAlert(false)}
          />
          <Grid submittedWords={submittedWord} currentWord={currentWord} />
        </div>
        <Keyboard
          onPress={handlePress}
          onEnter={handleEnter}
          onDelete={handleDelete}
        />
      </div>
      <Modal modalState={modalState} onHide={handleHideModal} />
    </div>
  )
}
export default App
