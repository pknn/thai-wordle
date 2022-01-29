import { getGuessState } from '../word/guess'
import { thaiStrip } from '../word/helper'
import { GuessState } from '../word/types'
import {
  CharacterExtended,
  CharacterExtendedWithStatus,
  ExtendedCharacter,
} from './types'

const extendedCharacterKeySymbolMap: Record<ExtendedCharacter, string> = {
  Shift: '⇪',
  Enter: '↵',
  Delete: '⌫',
}

export const toExtendedKeySymbol = (extendedCharacter: ExtendedCharacter) =>
  extendedCharacterKeySymbolMap[extendedCharacter]

export const isExtendedCharacter = (characterExtended: CharacterExtended) =>
  ['Shift', 'Enter', 'Delete'].includes(characterExtended)

const getMaxPrecedenceGuessState = (...guessState: GuessState[]) =>
  guessState.find((g) => g === 'Correct') ||
  guessState.find((g) => g === 'Present') ||
  'Absent'

export const getKeyStatuses = (
  submittedWords: string[],
  character: CharacterExtended,
): CharacterExtendedWithStatus => {
  if (isExtendedCharacter(character))
    return {
      character,
      status: 'Unused',
    }
  const characterPossibleGuessStates = [
    ...new Set(
      submittedWords
        .filter((submittedWord) => submittedWord.includes(character))
        .flatMap((submittedWord) => getGuessState(submittedWord))
        .filter((token) => thaiStrip(token.character as string) === character)
        .map((token) => token.guessState as GuessState),
    ),
  ]

  return {
    character,
    status:
      characterPossibleGuessStates.length <= 0
        ? 'Unused'
        : getMaxPrecedenceGuessState(...characterPossibleGuessStates),
  }
}
