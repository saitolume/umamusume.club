import NextHead from 'next/head'
import { FC } from 'react'

type Props = {
  title?: string
}

const BASE_TITLE = 'ウマ娘 プリティーダービー フレンド募集板'
const DESCRIPTION = '「ウマ娘 プリティーダービー」のフレンド募集掲示板です。代表ウマ娘や育成サポートで絞り込んで理想のフレンドを探すことができます。'

const Head: FC<Props> = (props) => {
  const title = props.title ? `${props.title} - ${BASE_TITLE}` : BASE_TITLE

  return (
    <NextHead>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@saitolume" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="description" content={DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </NextHead>
  )
}

export default Head
