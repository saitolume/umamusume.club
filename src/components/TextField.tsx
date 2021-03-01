import classNames from 'classnames'
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  memo,
  RefObject,
  TextareaHTMLAttributes,
} from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  multiple: true
}

export type TextFieldProps = InputProps | TextareaProps

const TextField: ForwardRefRenderFunction<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
> = ({ className, multiple, ...props }, ref) =>
  multiple ? (
    <textarea
      className={classNames(
        'border-uma-border2 border rounded h-10 px-2 font-bold text-uma-text1',
        className
      )}
      ref={ref as RefObject<HTMLTextAreaElement>}
      {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
    />
  ) : (
    <input
      className={classNames(
        'border-uma-border2 border rounded h-10 px-2 font-bold text-uma-text1',
        className
      )}
      ref={ref as RefObject<HTMLInputElement>}
      type="text"
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
    />
  )

export default memo(forwardRef(TextField))
