import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <header></header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer></footer>
  </>
)

export default App
