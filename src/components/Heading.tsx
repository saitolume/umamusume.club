import { FC } from 'react'

const Heading: FC = ({ children }) => (
  <h2 className="pl-3 text-uma-text3 bg-uma-surface2 h-9 flex items-center w-1/3 font-bold mb-6">
    {children}
  </h2>
)

export default Heading
