import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Header from '~/components/Header'
import UmamusumeProvider from '~/components/UmamusumeProvider'
import { store } from '~/store'
import 'tailwindcss/tailwind.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Header />
    <div className="md:w-1/2 md:m-auto">
      <section className="px-3 my-8 text-uma-text1 font-bold text-sm">
        <strong className="font-bold">
          個人 (
          <a
            className="border-b border-uma-border1"
            href="https://twitter.com/saitolume"
            target="_blank"
            rel="noopener noreferrer"
          >
            @saitolume
          </a>
          ) が運営・開発する非公式SNSです。
        </strong>
        <p>
          フィードバックは
          <a
            className="border-b border-uma-border1"
            href="https://forms.gle/EvRVZMNxbAGRq6Hy7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Form
          </a>
          までお願いします。
        </p>
      </section>
      <main>
        <Component {...pageProps} />
        <UmamusumeProvider />
      </main>
    </div>
  </Provider>
)

export default App
