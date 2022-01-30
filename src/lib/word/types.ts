export type GuessState = 'Correct' | 'Present' | 'Absent'

export interface CharacterToken {
  character?: string
  guessState?: GuessState
}

export interface Solution {
  word: string
  solutionIndex: number
}
