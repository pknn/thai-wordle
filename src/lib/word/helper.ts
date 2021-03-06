const pattern = /[[ิีึืุู่้๊๋์ั็]/

export const thaiSplit = (word: string) =>
  word
    .split('')
    .reduce(
      (acc: string[][], cur: string, i: number) =>
        pattern.test(cur) && i !== 0
          ? [...acc.slice(0, acc.length - 1), [...acc[acc.length - 1], cur]]
          : [...acc, [cur]],
      [],
    )
    .map((token) => token.join(''))

export const thaiLength = (word: string) => thaiSplit(word).length

export const thaiStrip = (word: string) =>
  word
    .split('')
    .filter((character) => !pattern.test(character))
    .join('')

export const thaiStripSplit = (word: string) => thaiStrip(word).split('')
