import { CharacterExtended, ExtendedCharacter } from './types'

const extendedCharacterKeySymbolMap: Record<ExtendedCharacter, string> = {
  Shift: '⇪',
  Enter: '↵',
  Delete: '⌫',
}

export const toExtendedKeySymbol = (extendedCharacter: ExtendedCharacter) =>
  extendedCharacterKeySymbolMap[extendedCharacter]

export const isExtendedCharacter = (characterExtended: CharacterExtended) =>
  ['Shift', 'Enter', 'Delete'].includes(characterExtended)
