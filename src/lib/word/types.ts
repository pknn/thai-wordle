import { Character } from '../keyboard/types'

export type GuessState = 'Correct' | 'Position' | 'Wrong' | 'New' | 'Empty'

export interface CharacterToken {
  character?: Character
  guessState: GuessState
}

export type WordToken = CharacterToken[]
