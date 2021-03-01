import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Header from '~/components/Header'
import UmamusumeProvider from '~/components/UmamusumeProvider'
import { store } from '~/store'
import 'tailwindcss/tailwind.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <section className="px-3 my-8 text-uma-text1 font-bold text-sm">
      <strong>個人が運営・開発する非公式SNSです。</strong>
      <p>
        フィードバックは
        <a
          className="border-b border-uma-border1"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Form
        </a>
        までお願いします。
      </p>
    </section>
    <main>
      <Provider store={store}>
        <Component {...pageProps} />
        <UmamusumeProvider />
      </Provider>
    </main>
  </>
)

export default App
