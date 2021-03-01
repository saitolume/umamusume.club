import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, memo } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const SecondaryButton: FC<Props> = ({ children }) => (
  <button
    className={classNames(
      'text-uma-text1 border-uma-border1 border w-60 rounded-md font-bold h-10 shadow'
    )}
  >
    {children}
  </button>
)

export default memo(SecondaryButton)
