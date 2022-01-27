import CurrentRow from './Row/CurrentRow'
import EmptyRow from './Row/EmptyRow'
import CompleteRow from './Row/CompleteRow'

interface Props {
  submittedWords: string[]
  currentWord: string
}

const Grid = ({ submittedWords, currentWord }: Props) => {
  return (
    <div className="my-2 flex flex-col gap-1">
      {submittedWords.map((word) => (
        <CompleteRow key={word} word={word} />
      ))}
      <CurrentRow word={currentWord} />
      {new Array(6 - submittedWords.length - 1).fill(0).map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}

export default Grid
