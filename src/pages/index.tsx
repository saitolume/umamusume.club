import { NextPage } from 'next'
import Link from 'next/link'
import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryButton from '~/components/Button/PrimaryButton'
import SecondaryAnchorButton from '~/components/Button/SecondaryAnchorButton'
import FormGroup from '~/components/FormGroup'
import Heading from '~/components/Heading'
import Label from '~/components/Label'
import TextField from '~/components/TextField'
import TrainerCard from '~/components/TrainerCard'
import { actions, getTrainerById, getTrainerIds, getUmamusumes } from '~/store'
import { Trainer, Umamusume } from '~/types'
import { trainerConverter } from '~/utils/converter'
import { firestore } from '~/utils/firebase'

type SeaarchValues = {
  representative: Umamusume['id']
  support: Umamusume['id']
}

const Page: NextPage = () => {
  const dispatch = useDispatch()
  const umamusumes = useSelector(getUmamusumes)
  const trainerIds = useSelector(getTrainerIds)
  const lastTrainer = useSelector(getTrainerById(trainerIds[trainerIds.length - 1]))

  const { handleSubmit, register } = useForm<SeaarchValues>({
    defaultValues: {
      representative: '',
      support: '',
    },
  })

  const submitSearchForm = useCallback(async (values: SeaarchValues) => {
    const representativeId = umamusumes?.find(({ name }) => name === values.representative)?.id
    const supportId = umamusumes?.find(({ name }) => name === values.support)?.id

    let query = firestore()
      .collection('trainers')
      .orderBy('createdAt', 'desc')
      .limit(20)
      .withConverter(trainerConverter)

    if (representativeId) query = query.where('representativeId', '==', representativeId)
    if (supportId) query = query.where('supportId', '==', supportId)

    query.get().then(({ docs }) => {
      const trainers = docs.map((doc) => doc.data())
      dispatch(actions.updateTrainers(trainers))
    })
  }, [])

  useEffect(() => {
    firestore()
      .collection('trainers')
      .orderBy('createdAt', 'desc')
      .limit(20)
      .withConverter(trainerConverter)
      .get()
      .then(({ docs }) => {
        const trainers = docs.map((doc) => doc.data())
        dispatch(actions.updateTrainers(trainers))
      })
  }, [])

  return (
    <section className="mb-10">
      <Heading>募集</Heading>
      <form
        className="px-3 flex flex-col items-center mb-6"
        onSubmit={handleSubmit(submitSearchForm)}
      >
        <FormGroup>
          <Label htmlFor="representative">代表ウマ娘</Label>
          <TextField
            className="w-full"
            id="representative"
            list="representative-list"
            {...register('representative')}
          />
          <datalist id="representative-list">
            <option value="未選択" />
            {umamusumes?.map((umamusume) => (
              <option key={umamusume.id} value={umamusume.name} />
            ))}
          </datalist>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="support">育成サポート</Label>
          <TextField className="w-full" id="support" list="support-list" {...register('support')} />
          <datalist id="support-list">
            <option value="未選択" />
            {umamusumes?.map((umamusume) => (
              <option key={umamusume.id} value={umamusume.name} />
            ))}
          </datalist>
        </FormGroup>
        <PrimaryButton type="submit">検索</PrimaryButton>
      </form>
      <div className="mb-6 flex justify-center">
        <Link href="/new" passHref>
          <SecondaryAnchorButton>新しい募集を作る</SecondaryAnchorButton>
        </Link>
      </div>
      <ul className="px-3 pb-16">
        {trainerIds.map((trainerId) => (
          <li key={trainerId} className="mb-6">
            <TrainerCard trainerId={trainerId} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Page
