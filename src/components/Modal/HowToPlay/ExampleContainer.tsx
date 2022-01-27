interface Props {
  children: JSX.Element | JSX.Element[]
}

const ExampleContainer = ({ children }: Props) => (
  <div className="my-2 flex flex-col gap-1">{children}</div>
)

export default ExampleContainer
