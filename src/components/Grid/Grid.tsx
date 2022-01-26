import { WordToken } from '../../lib/word/types'
import Row from './Row'

interface Props {
  words: WordToken[]
}

const Grid = ({ words }: Props) => (
  <div className="my-2 flex flex-col gap-1">
    {words.map((word) => (
      <Row key={word.join('')} word={word} />
    ))}
  </div>
)

export default Grid
