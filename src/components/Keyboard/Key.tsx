import {
  isExtendedCharacter,
  toExtendedKeySymbol,
} from '../../lib/keyboard/helper'
import { CharacterExtended, ExtendedCharacter } from '../../lib/keyboard/types'

interface DataProps {
  character: CharacterExtended
}

interface ActionProps {
  onPress: (character: CharacterExtended) => void
}

type Props = DataProps & ActionProps

const Key = ({ character, onPress }: Props) => {
  const isUnpressable = character === ' '

  const classNames = [
    'm-0.5 md:px-3 py-3 hover:bg-gray-300 rounded',
    isUnpressable ? 'bg-gray-300' : 'bg-gray-200',
    isExtendedCharacter(character) ? 'w-12 text-md' : 'w-8 text-xs',
  ].join(' ')

  const charactorSymbol = isExtendedCharacter(character)
    ? toExtendedKeySymbol(character as ExtendedCharacter)
    : character

  const handlePress = () => {
    onPress(character as CharacterExtended)
  }

  return (
    <button
      className={classNames}
      disabled={isUnpressable}
      onClick={handlePress}
    >
      {charactorSymbol}
    </button>
  )
}

export default Key
