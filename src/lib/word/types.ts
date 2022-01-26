export type GuessState = 'Correct' | 'Present' | 'Absent'

export interface CharacterToken {
  character?: string
  guessState?: GuessState
}
