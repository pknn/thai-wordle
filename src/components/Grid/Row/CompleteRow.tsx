import { getGuessState } from '../../../lib/word/guess'
import Row from './Row'

interface Props {
  word: string
}

const CompleteRow = ({ word }: Props) => <Row wordToken={getGuessState(word)} />

export default CompleteRow
