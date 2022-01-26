import { useState } from 'react'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import { Character } from './lib/keyboard/types'

const App = () => {
  const [submittedWord, setSubmittedWord] = useState<string[]>([])
  const [currentWord, setCurrentWord] = useState('')
  const handlePress = (character: Character) => {
    if (currentWord.length >= 5) return
    setCurrentWord(currentWord + character)
  }

  const handleEnter = () => {
    setSubmittedWord([...submittedWord, currentWord])
    setCurrentWord('')
  }

  const handleDelete = () => {
    setCurrentWord(currentWord.slice(0, currentWord.length - 1))
  }

  const words = ['ไทยคม', 'ทำงาน']

  return (
    <div className="md:container p-4 md:px-4 md:max-w-3xl">
      <div className="text-2xl">ไทยเวิร์ดเดิล</div>
      <div>{currentWord}</div>
      <Grid submittedWords={words} currentWord={currentWord} />
      <Keyboard
        onPress={handlePress}
        onEnter={handleEnter}
        onDelete={handleDelete}
      />
    </div>
  )
}
export default App
