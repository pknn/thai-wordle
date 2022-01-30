import CurrentRow from './Row/CurrentRow'
import EmptyRow from './Row/EmptyRow'
import CompleteRow from './Row/CompleteRow'
import { useMemo } from 'react'

interface Props {
  submittedWords: string[]
  currentWord: string
}

const Grid = ({ submittedWords, currentWord }: Props) => {
  const emptyRowsArray = useMemo(
    () =>
      submittedWords.length >= 6
        ? []
        : new Array(6 - submittedWords.length - 1).fill(0),
    [submittedWords],
  )
  return (
    <div className="my-2 flex flex-col gap-1">
      {submittedWords.map((word, i) => (
        <CompleteRow key={i + word} word={word} />
      ))}
      {submittedWords.length < 6 && <CurrentRow word={currentWord} />}
      {emptyRowsArray.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}

export default Grid
