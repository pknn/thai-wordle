import { useState } from 'react'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import { Character } from './lib/keyboard/types'

const App = () => {
  const [word, setWord] = useState('')
  const handlePress = (character: Character) => {
    if (word.length >= 5) return
    setWord(word + character)
  }

  const handleEnter = () => {}

  const handleDelete = () => {
    setWord(word.slice(0, word.length - 1))
  }

  const words = ['ไทยคม', 'ทำงาน']

  return (
    <div className="md:container p-4 md:px-4 md:max-w-3xl">
      <div className="text-2xl">ไทยเวิร์ดเดิล</div>
      <div>{word}</div>
      <Grid words={words} />
      <Keyboard
        onPress={handlePress}
        onEnter={handleEnter}
        onDelete={handleDelete}
      />
    </div>
  )
}
export default App
