import CurrentRow from './Row/CurrentRow'
import EmptyRow from './Row/EmptyRow'
import Row from './Row/Row'

interface Props {
  submittedWords: string[]
  currentWord: string
}

const Grid = ({ submittedWords, currentWord }: Props) => {
  return (
    <div className="my-2 flex flex-col gap-1">
      {submittedWords.map((word) => (
        <Row key={word} word={word} />
      ))}
      <CurrentRow word={currentWord} />
      <EmptyRow />
    </div>
  )
}

export default Grid
