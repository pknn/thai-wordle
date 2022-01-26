import Cell from '../Cell'
import RowContainer from './RowContainer'

const EmptyRow = () => (
  <RowContainer>
    {new Array(5).fill(0).map((_, i) => (
      <Cell key={i} />
    ))}
  </RowContainer>
)

export default EmptyRow
