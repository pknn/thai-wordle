import { XIcon } from '@heroicons/react/solid'

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
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-70 z-50 overflow-y-scroll overscroll-contain min-h-screen pb-20"
      onClick={() => onHide()}
    >
      <div className="flex p-4 justify-center overscroll-contain">
        <div className="rounded-md shadow-md text-center bg-white w-full sm:w-1/2 lg:w-1/3 relative">
          <div className="absolute right-6 top-6">
            <XIcon className="h-5 w-5 text-gray-500" onClick={() => onHide()} />
          </div>
          <div className="px-4 py-8">{children}</div>
        </div>
      </div>
    </div>
  ) : null

export default ModalContainer
