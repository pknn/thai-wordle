import objectHash from 'object-hash'
import { useMemo } from 'react'
import { WordToken } from '../../lib/word/types'
import EmptyRow from './Row/EmptyRow'
import Row from './Row/Row'

interface Props {
  words: WordToken[]
}

const Grid = ({ words }: Props) => {
  const fullGrids = useMemo(
    () =>
      words
        .map((word) => <Row key={objectHash(word)} word={word} />)
        .concat(
          new Array(6 - words.length)
            .fill(0)
            .map((_, i) => <EmptyRow key={i} />),
        ),
    [words],
  )
  return <div className="my-2 flex flex-col gap-1">{fullGrids}</div>
}

export default Grid
