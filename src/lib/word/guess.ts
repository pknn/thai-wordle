import { thaiSplit, thaiStripSplit } from './helper'
import { CharacterToken } from './types'
import { getSolution } from './words'

export const getGuessState = (word: string): CharacterToken[] => {
  const solution = getSolution()
  const solutionSplitted = thaiSplit(solution)
  const solutionSplitStripped = thaiStripSplit(solution)
  const guessWordSplitStripped = thaiStripSplit(word)

  const result: CharacterToken[] = guessWordSplitStripped.map((character) => ({
    character,
  }))

  guessWordSplitStripped.forEach((character, i) => {
    if (solutionSplitStripped[i] === character)
      result[i] = {
        character: solutionSplitted[i],
        guessState: 'Correct',
      }
  })

  guessWordSplitStripped.forEach((character, i) => {
    if (!result[i].guessState && !solutionSplitStripped.includes(character))
      result[i].guessState = 'Absent'
  })

  const remainingCharacterInSolution = solutionSplitStripped.filter(
    (_, i) => result[i].guessState !== 'Correct',
  )

  remainingCharacterInSolution.forEach((character) => {
    const index = result.findIndex(
      (token) => !token.guessState && token.character === character,
    )
    if (index !== -1)
      result[index] = {
        character: solutionSplitted[index],
        guessState: 'Present',
      }
  })

  return result.map((v) => (v.guessState ? v : { ...v, guessState: 'Absent' }))
}
