import { memo, useMemo } from 'react'
import { GuessState } from '../../lib/word/types'

interface Props {
  character?: string
  guessState?: GuessState
}

const Cell = ({ character, guessState }: Props) => {
  const colorMap: Record<GuessState, string> = {
    Correct: 'text-white border-green-500 bg-green-500',
    Present: 'text-white border-yellow-500 bg-yellow-500',
    Absent: 'text-white border-gray-500 bg-gray-500',
  }

  const color = useMemo(() => {
    if (guessState) return colorMap[guessState]
    if (character) return 'text-black border-black bg-none'
    return 'border-gray-300'
  }, [character, guessState])

  const classNames = [
    'text-2xl py-3 h-14 w-14 text-center border-2 rounded',
    color,
  ].join(' ')

  return <span className={classNames}>{character}</span>
}

export default memo(Cell)
