export type ModalName = 'HowToPlay' | 'Summary'

export interface ModalState {
  shouldShow: boolean
  modal: ModalName
}
