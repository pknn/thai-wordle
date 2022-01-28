import { thaiSplit, thaiStripSplit } from './helper'
import { CharacterToken } from './types'
import { getSolution } from './words'

const solution = getSolution()

export const isSolution = (word: string) => word === solution

export const getGuessState = (word: string): CharacterToken[] => {
  const solutionSplitted = thaiSplit(solution)
  const solutionSplitStripped = thaiStripSplit(solution)
  const guessWordSplitted = thaiSplit(word)
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
      result[i] = {
        character: guessWordSplitted[i],
        guessState: 'Absent',
      }
  })

  const remainingCharacterInSolutionStripped = solutionSplitStripped.filter(
    (_, i) => result[i].guessState !== 'Correct',
  )
  const remainingCharacterInSolution = solutionSplitted.filter(
    (_, i) => result[i].guessState !== 'Correct',
  )

  remainingCharacterInSolutionStripped.forEach((character, i) => {
    const index = result.findIndex(
      (token) => !token.guessState && token.character === character,
    )
    if (index !== -1)
      result[index] = {
        character: remainingCharacterInSolution[i],
        guessState: 'Present',
      }
  })

  return result.map((v) => (v.guessState ? v : { ...v, guessState: 'Absent' }))
}
