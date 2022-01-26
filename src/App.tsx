import { useState } from 'react'
import Keyboard from './components/Keyboard'
import { Character } from './lib/keyboard/types'

const App = () => {
  const [word, setWord] = useState('')
  const handlePress = (character: Character) => {
    if (word.length >= 5) return

    setWord(word + character)
  }

  const handleEnter = () => {}
  const handleDelete = () => {}
  return (
    <div className="md:container p-4 md:px-4 md:max-w-3xl">
      <div className="text-2xl">ไทยเวิร์ดเดิล</div>
      <div>{word}</div>
      <Keyboard
        onPress={handlePress}
        onEnter={handleEnter}
        onDelete={handleDelete}
      />
    </div>
  )
}
export default App
