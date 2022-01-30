import { solution } from '../../../lib/word/guess'

interface DataProps {
  submittedWords: string[]
}

const Solution = ({ submittedWords }: DataProps) =>
  submittedWords.includes(solution.word) ? (
    <div className="text-xl my-2">คำตอบก็คือ {solution.word}</div>
  ) : null

export default Solution
