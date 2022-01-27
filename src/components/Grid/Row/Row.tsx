import { memo } from 'react'
import { CharacterToken } from '../../../lib/word/types'
import Cell from '../Cell'
import RowContainer from './RowContainer'

interface Props {
  wordToken: CharacterToken[]
}

const Row = ({ wordToken }: Props) => (
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

export default memo(Row)
