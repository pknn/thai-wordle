import { memo } from 'react'
import { CharacterExtended, KeySet } from '../../lib/keyboard/types'
import KeyboardRow from './KeyboardRow'

interface KeyboardSetProps {
  keySet: KeySet
  onPress: (character: CharacterExtended) => void
}

const KeyboardSet = ({ keySet, onPress }: KeyboardSetProps) => (
  <div>
    {keySet.map((row, rIndex) => (
      <KeyboardRow key={rIndex} index={rIndex} row={row} onPress={onPress} />
    ))}
  </div>
)

export default memo(KeyboardSet)
