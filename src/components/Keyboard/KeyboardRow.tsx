import { CharacterExtended, KeyRow } from '../../lib/keyboard/types'
import Key from './Key'

interface DataProps {
  row: KeyRow
  index: number
}

interface ActionProps {
  onPress: (character: CharacterExtended) => void
}

const KeyboardRow = ({ row, index, onPress }: DataProps & ActionProps) => (
  <div className="flex justify-center">
    {row.map((character, cIndex) => (
      <Key
        key={`${index}${cIndex}${character}`}
        characterWithStatus={character}
        onPress={onPress}
      />
    ))}
  </div>
)

export default KeyboardRow
