import { useMemo } from 'react'
import { thaiSplit } from '../../../lib/word/helper'
import Row from './Row'

interface Props {
  word: string
}

const CurrentRow = ({ word }: Props) => {
  const characterTokens = useMemo(
    () =>
      thaiSplit(word).map((character) => ({
        character,
        guessState: undefined,
      })),
    [word],
  )
  const paddedWord = useMemo(
    () => Array.from({ ...characterTokens, length: 5 }, (v) => v ?? {}),
    [word],
  )

  return <Row wordToken={paddedWord} />
}

export default CurrentRow
