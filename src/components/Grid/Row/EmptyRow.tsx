import { WordToken } from '../../../lib/word/types'
import Row from './Row'

const emptyWordToken: WordToken = new Array(5).fill({
  character: undefined,
  guessState: 'Empty',
})

const EmptyRow = () => <Row word={emptyWordToken} />

export default EmptyRow
