import classNames from 'classnames'
import { forwardRef, ForwardRefRenderFunction, memo, SelectHTMLAttributes } from 'react'

type Props = SelectHTMLAttributes<HTMLSelectElement>

const Select: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
  { children, className, ...props },
  ref
) => (
  <select
    ref={ref}
    className={classNames(
      'border-uma-border2 border rounded h-10 px-2 font-bold text-uma-text1 cursor-pointer',
      className
    )}
    {...props}
  >
    {children}
  </select>
)

export default memo(forwardRef(Select))
