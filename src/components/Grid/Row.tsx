import { memo } from 'react'
import { WordToken } from '../../lib/word/types'
import Cell from './Cell'

interface Props {
  word: WordToken
}

const Row = ({ word }: Props) => (
  <div className="flex gap-1 justify-center">
    {word.map((characterToken) => (
      <Cell key={characterToken.character} character={characterToken} />
    ))}
  </div>
)

export default memo(Row)
