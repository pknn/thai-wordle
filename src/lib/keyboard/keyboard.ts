import { BaseKeyboardLayout } from './types'

export const keys: BaseKeyboardLayout = {
  nonShifted: [
    [' ', ' ', ' ', 'ภ', 'ถ', 'ุ', 'ึ', 'ค', 'ต', 'จ', 'ข', 'ช'],
    [' ', 'ไ', 'ำ', 'พ', 'ะ', 'ั', 'ี', 'ร', 'น', 'ย', 'บ', 'ล', 'ฃ'],
    ['ฟ', 'ห', 'ก', 'ด', 'เ', '้', '่', 'า', 'ส', 'ว', 'ง', 'Delete'],
    ['Shift', 'ผ', 'ป', 'แ', 'อ', 'ิ', 'ื', 'ท', 'ม', 'ใ', 'ฝ', 'Enter'],
  ],
  shifted: [
    [' ', ' ', ' ', ' ', ' ', 'ู', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'ฎ', 'ฑ', 'ธ', ' ', '๊', 'ณ', ' ', 'ญ', 'ฐ', ' ', 'ฅ'],
    ['ฤ', 'ฆ', 'ฏ', 'โ', 'ฌ', '็', '๋', 'ษ', 'ศ', 'ซ', ' ', 'Delete'],
    ['Shift', ' ', ' ', 'ฉ', 'ฮ', ' ', '์', ' ', 'ฒ', 'ฬ', 'ฦ', 'Enter'],
  ],
}
