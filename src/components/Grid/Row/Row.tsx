import { memo } from 'react'
import { WordToken } from '../../../lib/word/types'
import Cell from '../Cell'

interface Props {
  word: WordToken
}

const Row = ({ word }: Props) => (
  <div className="flex gap-1 justify-center">
    {word.map((characterToken, i) => (
      <Cell key={i} character={characterToken} />
    ))}
  </div>
)

export default memo(Row)
