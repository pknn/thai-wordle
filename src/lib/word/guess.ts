import { CharacterToken } from './types'

export const getGuessState = (
  word: string,
): [
  CharacterToken,
  CharacterToken,
  CharacterToken,
  CharacterToken,
  CharacterToken,
] =>
  word === 'ไทยคม'
    ? [
        { character: 'ไ', guessState: 'Correct' },
        { character: 'ท', guessState: 'Present' },
        { character: 'ย', guessState: 'Present' },
        { character: 'ค', guessState: 'Absent' },
        { character: 'ม', guessState: 'Absent' },
      ]
    : [
        { character: 'ไ', guessState: 'Present' },
        { character: 'ไ', guessState: 'Present' },
        { character: 'ไ', guessState: 'Present' },
        { character: 'ไ', guessState: 'Present' },
        { character: 'ไ', guessState: 'Present' },
      ]
