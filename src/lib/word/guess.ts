import { thaiSplit } from './helper'
import { CharacterToken } from './types'

export const getGuessState = (word: string): CharacterToken[] =>
  word === 'ไทยคม'
    ? [
        { character: 'ไ', guessState: 'Correct' },
        { character: 'ท', guessState: 'Present' },
        { character: 'ย', guessState: 'Present' },
        { character: 'ค', guessState: 'Absent' },
        { character: 'ม', guessState: 'Absent' },
      ]
    : thaiSplit(word).map((character) => ({
        character,
        guessState: Math.random() > 0.5 ? 'Present' : 'Correct',
      }))
