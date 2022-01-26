import { useMemo, useState } from 'react'
import { isExtendedCharacter } from '../../lib/keyboard/helper'
import { keys } from '../../lib/keyboard/keyboard'
import {
  Character,
  CharacterExtended,
  ExtendedCharacter,
} from '../../lib/keyboard/types'
import KeySet from './KeySet'

interface ActionProps {
  onPress: (character: Character) => void
  onEnter: () => void
  onDelete: () => void
}

type Props = ActionProps

const Keyboard = ({ onPress, onEnter, onDelete }: Props) => {
  const [isShifted, setIsShifted] = useState(false)

  const keySet = useMemo(
    () => keys[isShifted ? 'shifted' : 'nonShifted'],
    [isShifted],
  )

  const handler: Record<ExtendedCharacter, () => void> = {
    Shift: () => setIsShifted(!isShifted),
    Enter: () => onEnter(),
    Delete: () => onDelete(),
  }

  const handlePress = (character: CharacterExtended) => {
    if (isExtendedCharacter(character))
      handler[character as ExtendedCharacter]()
    else {
      if (isShifted) setIsShifted(!isShifted)
      onPress(character as Character)
    }
  }

  return (
    <div>
      <KeySet keySet={keySet} onPress={handlePress} />
    </div>
  )
}

export default Keyboard
