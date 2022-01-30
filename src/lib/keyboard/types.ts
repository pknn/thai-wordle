import { GuessState } from '../word/types'

export type Character =
  | 'ภ'
  | 'ถ'
  | 'ุ'
  | 'ึ'
  | 'ค'
  | 'ต'
  | 'จ'
  | 'ข'
  | 'ช'
  | 'ไ'
  | 'ำ'
  | 'พ'
  | 'ะ'
  | 'ั'
  | 'ี'
  | 'ร'
  | 'น'
  | 'ย'
  | 'บ'
  | 'ล'
  | 'ฃ'
  | 'ฟ'
  | 'ห'
  | 'ก'
  | 'ด'
  | 'เ'
  | '้'
  | '่'
  | 'า'
  | 'ส'
  | 'ว'
  | 'ง'
  | 'ผ'
  | 'ป'
  | 'แ'
  | 'อ'
  | 'ิ'
  | 'ื'
  | 'ท'
  | 'ม'
  | 'ใ'
  | 'ฝ'
  | 'ู'
  | 'ฎ'
  | 'ฑ'
  | 'ธ'
  | '๊'
  | 'ณ'
  | 'ญ'
  | 'ฐ'
  | 'ฅ'
  | 'ฤ'
  | 'ฆ'
  | 'ฏ'
  | 'โ'
  | 'ฌ'
  | '็'
  | '๋'
  | 'ษ'
  | 'ศ'
  | 'ซ'
  | 'ฉ'
  | 'ฮ'
  | '์'
  | 'ฒ'
  | 'ฬ'
  | 'ฦ'

export type ExtendedCharacter = 'Enter' | 'Shift' | 'Delete'

export type TypableCharacter = Character | ExtendedCharacter

export type CharacterExtended = TypableCharacter | ' '

export type BaseKeyRow = CharacterExtended[]

export type BaseKeySet = BaseKeyRow[]

export interface BaseKeyboardLayout {
  nonShifted: BaseKeySet
  shifted: BaseKeySet
}

export type KeyStatus = GuessState | 'Unused'

export interface CharacterExtendedWithStatus {
  character: CharacterExtended
  status: KeyStatus
}

export type KeyRow = CharacterExtendedWithStatus[]

export type KeySet = KeyRow[]
