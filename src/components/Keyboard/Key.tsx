import React, { useMemo } from 'react'
import {
  isExtendedCharacter,
  toExtendedKeySymbol,
} from '../../lib/keyboard/helper'
import {
  CharacterExtended,
  CharacterExtendedWithStatus,
  ExtendedCharacter,
  KeyStatus,
} from '../../lib/keyboard/types'

interface DataProps {
  characterWithStatus: CharacterExtendedWithStatus
}

interface ActionProps {
  onPress: (character: CharacterExtended) => void
}

type Props = DataProps & ActionProps

const colorStatusMap: Record<KeyStatus, string> = {
  Correct: 'bg-green-400 hover:bg-green-500',
  Present: 'bg-yellow-500 hover:bg-yellow-600',
  Absent: 'bg-gray-500',
  Unused: 'bg-gray-200 hover:bg-gray-300',
}

const Key = ({ characterWithStatus, onPress }: Props) => {
  const { character, status } = characterWithStatus
  const isUnpressable = character === ' '

  const color = useMemo(() => {
    if (isUnpressable) return 'bg-gray-100'
    if (character === 'Enter') return 'bg-blue-400 text-white'
    return colorStatusMap[status]
  }, [status])

  const classNames = [
    'm-0.5 md:px-3 py-3 rounded',
    color,
    isExtendedCharacter(character) ? 'w-12 text-md' : 'w-8 text-xs',
  ].join(' ')

  const charactorSymbol = isExtendedCharacter(character)
    ? toExtendedKeySymbol(character as ExtendedCharacter)
    : character

  const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPress(character as CharacterExtended)
    event.currentTarget.blur()
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
