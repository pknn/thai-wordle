interface Props {
  children: JSX.Element | JSX.Element[]
}

const RowContainer = ({ children }: Props) => (
  <div className="flex gap-1 justify-center">{children}</div>
)

export default RowContainer
