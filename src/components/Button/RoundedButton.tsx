import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, memo } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const RoundedButton: FC<Props> = ({ children, className, ...props }) => (
  <button
    className={classNames(
      'text-uma-text1 border-uma-border1 border font-bold shadow px-3 rounded-full',
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export default memo(RoundedButton)
