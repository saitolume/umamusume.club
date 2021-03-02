import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error from 'next/error'
import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryAnchorButton from '~/components/Button/PrimaryAnchorButton'
import SecondaryAnchorButton from '~/components/Button/SecondaryAnchorButton'
import Head from '~/components/Head'
import Heading from '~/components/Heading'
import TrainerCard from '~/components/TrainerCard'
import { actions, getUmamusumeById } from '~/store'
import { Trainer } from '~/types'
import { trainerConverter } from '~/utils/converter'
import { env } from '~/utils/env'
import { firestore } from '~/utils/firebase'

type Props = {
  trainer?: Trainer
  errorCode?: number
}

const Page: NextPage<Props> = (props) => {
  const dispatch = useDispatch()
  const representative = useSelector(getUmamusumeById(props.trainer?.representativeId ?? ''))
  const support = useSelector(getUmamusumeById(props.trainer?.supportId ?? ''))

  const shareUrl = useMemo(() => {
    if (props.trainer === undefined || typeof window === 'undefined') return undefined
    return `https://twitter.com/intent/tweet?text=${encodeURI(
      [
        '「ウマ娘 プリティーダービー」のフレンドを募集中！',
        '',
        `トレーナーID: ${props.trainer.trainerId}`,
        `代表ウマ娘: ${representative?.name}`,
        `育成サポート: ${support?.name}`,
        `${location.href}`,
      ].join('\n')
    )}&hashtags=${encodeURI('ウマ娘')}`
  }, [representative, support])

  useEffect(() => {
    if (props.trainer === undefined) return
    dispatch(actions.insertTrainers([props.trainer]))
  }, [props.trainer])

  if (props.trainer === undefined) return null
  if (props.errorCode) return <Error statusCode={props.errorCode} />

  return (
    <>
      <Head title={`${props.trainer.name || '匿名'}さんの募集`} />
      <section className="mb-10">
        <Heading>募集</Heading>
        <div className="px-3 mb-10">
          <TrainerCard trainerId={props.trainer.id} />
        </div>
        <div className="flex flex-col items-center">
          <PrimaryAnchorButton
            className="mb-6"
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitterでシェアする
          </PrimaryAnchorButton>
          <Link href="/new" passHref>
            <SecondaryAnchorButton className="mb-6">新しい募集を作る</SecondaryAnchorButton>
          </Link>
          <Link href="/" passHref>
            <SecondaryAnchorButton className="mb-6">他の募集を探す</SecondaryAnchorButton>
          </Link>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
})

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id

  if (typeof id !== 'string') {
    return {
      props: {
        errorCode: 404,
      },
      revalidate: env.IS_DEV ? 1 : 30,
    }
  }

  const doc = await firestore().collection('trainers').doc(id).withConverter(trainerConverter).get()

  return {
    props: {
      trainer: doc.data(),
    },
    revalidate: env.IS_DEV ? 1 : 30,
  }
}

export default Page
