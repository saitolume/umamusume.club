import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, memo } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const PrimatyButton: FC<Props> = ({ children }) => (
  <button
    className={classNames(
      'bg-uma-surface2 text-uma-text3 border-uma-border3 border w-60 rounded-md font-bold h-10 shadow'
    )}
  >
    {children}
  </button>
)

export default memo(PrimatyButton)
