import HowToPlay from './HowToPlay'
import Summary from './Summary'
import { ModalState } from './types'

interface DataProps {
  modalState: ModalState
}

interface ActionProps {
  onHide: () => void
}

type Props<T> = DataProps & ActionProps & T

const Modal = <T,>(props: Props<T>) => {
  return props.modalState.modal === 'HowToPlay' ? (
    <HowToPlay shouldShow={props.modalState.shouldShow} onHide={props.onHide} />
  ) : (
    <Summary shouldShow={props.modalState.shouldShow} onHide={props.onHide} />
  )
}

export default Modal
