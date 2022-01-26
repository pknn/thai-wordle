import { useMemo } from 'react'
import { thaiLength, thaiSplit } from '../../../lib/word/helper'
import Cell from '../Cell'
import RowContainer from './RowContainer'

interface Props {
  word: string
}

const CurrentRow = ({ word }: Props) => {
  const splitedWord = useMemo(() => thaiSplit(word), [word])
  const wordLength = useMemo(() => thaiLength(word), [word])
  return (
    <RowContainer>
      {splitedWord
        .map((character, i) => (
          <Cell key={`${i}${character}`} character={character} />
        ))
        .concat(
          new Array(5 - wordLength).fill(0).map((_, i) => <Cell key={i} />),
        )}
    </RowContainer>
  )
}

export default CurrentRow
