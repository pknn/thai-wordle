import { thaiSplit } from '../../../lib/word/helper'
import { CharacterToken } from '../../../lib/word/types'
import { Row } from '../../Grid'
import ModalContainer, { ContainerProps } from '../ModalContainer'
import ExampleContainer from './ExampleContainer'

const HowToPlay = ({ shouldShow, onHide }: ContainerProps) => {
  const correctExample = thaiSplit('อนุญาต').map(
    (character, i): CharacterToken =>
      i === 0 ? { character, guessState: 'Correct' } : { character },
  )
  const presentExample = thaiSplit('คำถาม').map(
    (character, i): CharacterToken =>
      i === 2 ? { character, guessState: 'Present' } : { character },
  )
  const absentExample = thaiSplit('ล้านนา').map(
    (character, i): CharacterToken =>
      i === 4 ? { character, guessState: 'Absent' } : { character },
  )

  const noVowelCorrectExample = thaiSplit('ดุเหว่า').map(
    (character): CharacterToken => ({
      character,
    }),
  )

  const withVowelCorrectExample = thaiSplit('ด้วงถั่ว').map(
    (character, i): CharacterToken =>
      i === 0
        ? { character, guessState: 'Correct' }
        : i === 4
        ? { character, guessState: 'Present' }
        : { character },
  )

  return (
    <ModalContainer shouldShow={shouldShow} onHide={onHide}>
      <h1 className="text-md">กรรมวิธีในการเล่น</h1>
      <div className="text-xs text-gray-600">
        <p>
          ผู้เล่นจะต้องใช้ความสามารถในการทายคำ โดยในการทายแต่ละครั้งนั้น
          จะเกิดผลให้กระเบื้องมีสีที่ต่างกันออกไปตามความใกล้เคียงกับคำตอบ
        </p>
        <ExampleContainer>
          <Row wordToken={correctExample} />
          <p>มีตัวอักษร อ อยู่ในคำ และอยู่ในตำแหน่งที่ถูกต้อง</p>
        </ExampleContainer>
        <ExampleContainer>
          <Row wordToken={presentExample} />
          <p>มีตัวอักษร ถ อยู่ในคำ แต่ตำแหน่งยังไม่ถูกต้อง</p>
        </ExampleContainer>
        <ExampleContainer>
          <Row wordToken={absentExample} />
          <p>ไม่มีสระ า อยู่ในคำแม้แต่เพียงตัวเดียว</p>
        </ExampleContainer>
        <p className="my-4">
          และเนื่องจากภาษาไทยนั้น
          มีความสลับซับซ้อนในการจัดเรียงสระและวรรณยุกต์มากกว่า
          ทางผู้พัฒนาจึงได้เพิ่มข้อยกเว้นไว้ เพื่อทำให้เล่นได้ง่ายขึ้น
        </p>
        <ExampleContainer>
          <Row wordToken={noVowelCorrectExample} />
          <p>🠗</p>
          <Row wordToken={withVowelCorrectExample} />
          <p>
            มีตัวอักษร ด อยู่ในคำ และอยู่ในตำแหน่งที่ถูกต้อง จะทำการเพิ่ม ไม้โท
            ให้โดยอัตโนมัติ
          </p>
          <p>
            ถึงแม้ผู้เล่นจะสะกดตัว ว โดยไม่มีสระ หรือวรรณยุกต์
            จะทำการแต้มสีเพื่อบ่งบอกว่ามีตัวอักษรนี้อยู่ในคำ
            แต่อยู่ในตำแหน่งที่ไม่ถูกต้อง
          </p>
          <p>
            หากมีการเติมสระหรือวรรณยุกต์ผิดตำแหน่ง จะไม่ถูกแต้มสีว่าอยู่ผิดจุด
          </p>
        </ExampleContainer>
      </div>
    </ModalContainer>
  )
}

export default HowToPlay
