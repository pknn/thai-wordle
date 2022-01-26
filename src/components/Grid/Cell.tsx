import { memo } from 'react'
import { CharacterToken, GuessState } from '../../lib/word/types'

interface Props {
  character: CharacterToken
}

const Cell = ({ character }: Props) => {
  const colorMap: Record<GuessState, string> = {
    Correct: 'text-white border-green-500 bg-green-500',
    Position: 'text-white border-yellow-500 bg-yellow-500',
    Wrong: 'text-white border-gray-500 bg-gray-500',
    New: 'text-black border-black bg-none',
  }

  const classNames = [
    'text-2xl py-3 h-14 w-14 text-center border-2 rounded',
    colorMap[character.guessState],
  ].join(' ')

  return <span className={classNames}>{character.character}</span>
}

export default memo(Cell)
