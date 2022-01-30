interface Props {
  word: string
  index: number
}

const MostFrequentWord = ({ word, index }: Props) => {
  const className = ['w-16 bg-yellow-400', `h-${8 - index * 2}`].join(' ')
  return (
    <div>
      <span>{word}</span>
      <div className={className}></div>
    </div>
  )
}

export default MostFrequentWord
