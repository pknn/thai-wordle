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

  const noVowelCorrectExample = thaiSplit('ลานนา').map(
    (character): CharacterToken => ({
      character,
    }),
  )

  const withVowelCorrectExample = thaiSplit('ล้านนา').map(
    (character, i): CharacterToken =>
      i === 0 ? { character, guessState: 'Correct' } : { character },
  )

  const noVowelPresentExample = thaiSplit('หลงกล').map(
    (character): CharacterToken => ({
      character,
    }),
  )

  const withVowelPresentExample = thaiSplit('หลงกล').map(
    (character, i): CharacterToken =>
      i === 1 ? { character, guessState: 'Present' } : { character },
  )

  return (
    <ModalContainer shouldShow={shouldShow} onHide={onHide}>
      <h1 className="text-md">กรรมวิธีในการเล่น</h1>
      <div className="text-xs text-gray-600">
        <p>
          ผู้เล่นจะต้องใช้ความสามารถในการทายคำ โดยในการทายแต่ละครั้งนั้น
          จะเกิดผลให้กระเบื้องมีสีที่ต่างกันออกไป
          แปรผันไปตามความใกล้เคียงกับคำตอบ
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
          มีความสลับซับซ้อนในการจัดเรียงสระและวรรณยุกต์มากกว่าภาษาอังกฤษ
          ทางผู้พัฒนาจึงได้เพิ่มข้อยกเว้นบางประการไว้
          เพื่อทำให้การละเล่นเป็นไปได้ด้วยความหรรษา
        </p>
        <ExampleContainer>
          <Row wordToken={noVowelCorrectExample} />
          <p>🠗</p>
          <Row wordToken={withVowelCorrectExample} />
          <p>
            มีตัวอักษร ล อยู่ในคำ และอยู่ในตำแหน่งที่ถูกต้อง จะทำการเพิ่ม ไม้โท
            ให้โดยปริยาย
          </p>
        </ExampleContainer>
        <ExampleContainer>
          <Row wordToken={noVowelPresentExample} />
          <p>🠗</p>
          <Row wordToken={withVowelPresentExample} />
          <p>
            ถึงแม้จะไม่มีสระ หรือวรรณยุกต์
            จะทำการแต้มสีเพื่อบ่งบอกว่ามีตัวอักษรนี้อยู่ในคำ
            แต่อยู่ในตำแหน่งที่ไม่ถูกต้อง
          </p>
        </ExampleContainer>
      </div>
    </ModalContainer>
  )
}

export default HowToPlay
