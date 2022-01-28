import ModalContainer, { ContainerProps } from '../ModalContainer'

const Summary = ({ shouldShow, onHide }: ContainerProps) => (
  <ModalContainer shouldShow={shouldShow} onHide={onHide}>
    <div>Summary</div>
  </ModalContainer>
)

export default Summary
