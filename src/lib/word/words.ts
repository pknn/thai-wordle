import { thaiStrip } from './helper'
import { Solution } from './types'
import Words from './words.json'

export const isInWordList = (word: string): boolean =>
  Words.map((w) => thaiStrip(w)).includes(thaiStrip(word))

export const getSolution = (): Solution => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)

  return {
    word: Words[index],
    solutionIndex: index,
  }
}
