import classNames from 'classnames'
import { AnchorHTMLAttributes, forwardRef, ForwardRefRenderFunction, memo } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement>

const PrimaryAnchorButton: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  { children, className, ...props },
  ref
) => (
  <a
    ref={ref}
    className={classNames(
      'bg-uma-surface2 text-uma-text3 border-uma-border3 border w-60 rounded-md font-bold h-10 shadow flex items-center justify-center',
      className
    )}
    data-anchor-button
    {...props}
  >
    {children}
  </a>
)

export default memo(forwardRef(PrimaryAnchorButton))
