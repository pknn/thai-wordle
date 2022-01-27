import Row from './Row'

const EmptyRow = () => {
  const emptyWordTokens = Array.from({ length: 5 }, () => ({}))

  return <Row wordToken={emptyWordTokens} />
}

export default EmptyRow
