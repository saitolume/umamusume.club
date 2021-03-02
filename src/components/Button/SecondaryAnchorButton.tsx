import classNames from 'classnames'
import { AnchorHTMLAttributes, forwardRef, ForwardRefRenderFunction, memo } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement>

const SecondaryAnchorButton: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  { children, className, ...props },
  ref
) => (
  <a
    ref={ref}
    className={classNames(
      'text-uma-text1 border-uma-border1 border w-60 rounded-md font-bold h-10 shadow flex items-center justify-center',
      className
    )}
    data-anchor-button
    {...props}
  >
    {children}
  </a>
)

export default memo(forwardRef(SecondaryAnchorButton))
