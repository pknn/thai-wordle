interface ChildrenProps {
  children: JSX.Element | JSX.Element[]
}

interface DataProps {
  shouldShow: boolean
}

interface ActionProps {
  onHide: () => void
}

export type ContainerProps = DataProps & ActionProps

const ModalContainer = ({
  children,
  shouldShow,
  onHide,
}: ContainerProps & ChildrenProps) =>
  shouldShow ? (
    <div className="absolute inset-0 m-auto bg-gray-500 bg-opacity-70 z-50">
      <div className="w-full h-full flex justify-center items-center">
        <div className="m-2 p-4 max-w-lg bg-white rounded-md shadow-md text-center">
          {children}
        </div>
      </div>
    </div>
  ) : null

export default ModalContainer
