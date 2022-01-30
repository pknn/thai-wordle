interface Props {
  word: string
  index: number
}

const MostFrequentWord = ({ word, index }: Props) => {
  const heights = ['h-8', 'h-6', 'h-4']
  const className = ['w-16 bg-yellow-400', heights[index]].join(' ')
  return (
    <div>
      <span>{word}</span>
      <div className={className}></div>
    </div>
  )
}

export default MostFrequentWord
