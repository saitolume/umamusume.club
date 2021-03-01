import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import Header from '~/components/Header'
import 'tailwindcss/tailwind.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <section className="px-3 my-8 text-uma-text1 font-bold text-sm">
      <strong>個人が運営・開発する非公式SNSです。</strong>
      <p>
        フィードバックは
        <a className="border-b border-uma-border1" href="/" target="_blank" rel="noopener noreferrer">
          Google Form
        </a>
        までお願いします。
      </p>
    </section>
    <main>
      <Component {...pageProps} />
    </main>
    <footer></footer>
  </>
)

export default App
