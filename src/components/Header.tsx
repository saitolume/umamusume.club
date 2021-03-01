import Link from 'next/link'
import { memo, VFC } from 'react'

const Header: VFC = () => (
  <header className="text-uma-text3 bg-uma-surface2 h-14 flex items-center justify-center font-bold border-uma-border3 border-b-2 rounded-br-lg rounded-bl-lg">
    <Link href="/">
      <a>
        <h1>ウマ娘 プリティーダービー フレンド募集板</h1>
      </a>
    </Link>
  </header>
)

export default memo(Header)
