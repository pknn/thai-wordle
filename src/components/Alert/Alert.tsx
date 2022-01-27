import { useCallback, useLayoutEffect } from 'react'

interface DataProps {
  shouldShow: boolean
}

interface ActionProps {
  onHide: () => void
}

type Props = DataProps & ActionProps

const Alert = ({ shouldShow, onHide }: Props) => {
  useLayoutEffect(() => {
    if (shouldShow) {
      setTimeout(() => {
        onHide()
      }, 1000)
    }
  }, [shouldShow])

  const getClassName = useCallback(
    () =>
      [
        'absolute w-full py-4 text-center bg-red-200 rounded shadow transition delay-150 duration-700 ease-in',
        shouldShow ? 'opacity-1' : 'opacity-0',
      ].join(' '),
    [shouldShow],
  )

  return <div className={getClassName()}>คำนี้ไม่ปรากฏในพจนานุกรม</div>
}

export default Alert
