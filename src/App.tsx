import { useState } from 'react'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import { Character } from './lib/keyboard/types'
import { WordToken } from './lib/word/types'

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

  const wordTokens: WordToken[] = [
    [
      { character: 'ไ', guessState: 'Correct' },
      { character: 'ท', guessState: 'Position' },
      { character: 'ย', guessState: 'Wrong' },
      { character: 'ค', guessState: 'Wrong' },
      { character: 'ม', guessState: 'Wrong' },
    ],
    [
      { character: 'ฅ', guessState: 'New' },
      { character: 'ค', guessState: 'New' },
      { character: 'ค', guessState: 'New' },
      { character: 'ค', guessState: 'New' },
      { character: 'ค', guessState: 'New' },
    ],
    [
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
    ],
    [
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
    ],
    [
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
    ],
    [
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
      { character: undefined, guessState: 'Empty' },
    ],
  ]

  return (
    <div className="md:container p-4 md:px-4 md:max-w-3xl">
      <div className="text-2xl">ไทยเวิร์ดเดิล</div>
      <Grid words={wordTokens} />
      <Keyboard
        onPress={handlePress}
        onEnter={handleEnter}
        onDelete={handleDelete}
      />
    </div>
  )
}
export default App
