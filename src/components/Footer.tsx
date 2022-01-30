const Footer = () => (
  <div className="flex flex-col items-center gap-1 py-2 text-xs">
    <a
      className="underline text-blue-400"
      href="https://github.com/pknn/thai-wordle/issues/new"
      target="_blank"
      rel="noreferrer"
    >
      เจอบั๊ก / ข้อเสนอแนะ
    </a>
    <a
      className="underline text-blue-400"
      href="https://github.com/pknn/thai-wordle"
      target="_blank"
      rel="noreferrer"
    >
      Github
    </a>
    <div>
      วิธีการเล่นได้แรงบันดาลใจ (ก๊อป?) มาจาก{' '}
      <a
        className="underline text-blue-400"
        href="https://thwordle.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        thwordle
      </a>
    </div>
  </div>
)

export default Footer
