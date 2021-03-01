import { FC } from 'react'

type Props = {
  htmlFor: string
}

const Label: FC<Props> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="text-uma-text1 font-bold block text-sm">
    {children}
  </label>
)

export default Label
