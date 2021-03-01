import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import Header from '~/components/Header'
import 'tailwindcss/tailwind.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <footer></footer>
  </>
)

export default App
