import { memo } from 'react'
import { getGuessState } from '../../../lib/word/guess'
import Cell from '../Cell'
import RowContainer from './RowContainer'

interface Props {
  word: string
}

const Row = ({ word }: Props) => {
  const wordToken = getGuessState(word)
  return (
    <RowContainer>
      {wordToken.map((characterToken, i) => (
        <Cell
          key={i}
          character={characterToken.character}
          guessState={characterToken.guessState}
        />
      ))}
    </RowContainer>
  )
}

export default memo(Row)
