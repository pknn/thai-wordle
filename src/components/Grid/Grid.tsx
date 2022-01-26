import EmptyRow from './Row/EmptyRow'
import Row from './Row/Row'

interface Props {
  words: string[]
}

const Grid = ({ words }: Props) => {
  return (
    <div className="my-2 flex flex-col gap-1">
      {words.map((word) => (
        <Row key={word} word={word} />
      ))}
      <EmptyRow />
    </div>
  )
}

export default Grid
