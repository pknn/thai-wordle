import { thaiSplit, thaiStripSplit } from './helper'
import { CharacterToken } from './types'
import { getSolution } from './words'

export const getGuessState = (word: string): CharacterToken[] => {
  const solution = getSolution()
  const solutionSplitted = thaiSplit(solution)
  const solutionSplitStripped = thaiStripSplit(solution)
  const guessWordSplitStripped = thaiStripSplit(word)

  return guessWordSplitStripped.map((character, index): CharacterToken => {
    if (solutionSplitStripped.includes(character))
      return {
        character:
          solutionSplitStripped[index] === character
            ? solutionSplitted[index]
            : character,
        guessState:
          solutionSplitStripped[index] === character ? 'Correct' : 'Present',
      }

    return {
      character,
      guessState: 'Absent',
    }
  })
}
