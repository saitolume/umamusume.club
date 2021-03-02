import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { ChangeEvent, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import PrimaryButton from '~/components/Button/PrimaryButton'
import SecondaryAnchorButton from '~/components/Button/SecondaryAnchorButton'
import FormGroup from '~/components/FormGroup'
import Head from '~/components/Head'
import Heading from '~/components/Heading'
import Label from '~/components/Label'
import TextField from '~/components/TextField'
import { getUmamusumes } from '~/store'
import { firestore } from '~/utils/firebase'

type Values = {
  trainerId: string
  name: string
  representative: string
  support: string
  comment: string
}

const Page: NextPage = () => {
  const router = useRouter()
  const umamusumes = useSelector(getUmamusumes)

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<Values>({
    defaultValues: {
      trainerId: '',
      name: '',
      representative: '',
      support: '',
      comment: '',
    },
  })

  const submitTrainer = useCallback(async (values: Values) => {
    const representativeId = umamusumes?.find(({ name }) => name === values.representative)?.id
    const supportId = umamusumes?.find(({ name }) => name === values.support)?.id

    if (representativeId === undefined || supportId === undefined) {
      return
    }

    const { id } = await firestore()
      .collection('trainers')
      .add({
        trainerId: Number(values.trainerId),
        name: values.name,
        representativeId,
        supportId,
        comment: values.comment,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })

    router.push(`/trainers/${id}`)
  }, [])

  const handleChangeTrainerId = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(Number(event.target.value))) {
      setError('trainerId', {
        type: 'valueAsNumber',
      })
    }
  }, [])

  return (
    <>
      <Head title="募集作成" />
      <section className="mb-10">
        <Heading>募集作成</Heading>
        <form
          className="px-3 flex flex-col items-center mb-6"
          onSubmit={handleSubmit(submitTrainer)}
        >
          <FormGroup>
            <Label htmlFor="trainerId">トレーナーID</Label>
            <TextField
              id="trainerId"
              className="w-full"
              type="text"
              inputMode="numeric"
              maxLength={9}
              {...register('trainerId', {
                required: true,
                maxLength: 9,
                minLength: 9,
              })}
              onChange={handleChangeTrainerId}
            />
            {errors.trainerId?.type === 'required' && (
              <span role="alert" className="text-xs text-uma-text1">
                入力してください
              </span>
            )}
            {(errors.trainerId?.type === 'maxLength' || errors.trainerId?.type === 'minLength') && (
              <span role="alert" className="text-xs text-uma-text1">
                9桁で入力してください
              </span>
            )}
            {errors.trainerId?.type === 'valueAsNumber' && (
              <span role="alert" className="text-xs text-uma-text1">
                数値で入力してください
              </span>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">名前 (任意)</Label>
            <TextField className="w-full" id="name" {...register('name')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="representative">代表ウマ娘</Label>
            <TextField
              className="w-full"
              id="representative"
              list="representative-list"
              {...register('representative', { required: true })}
            />
            <datalist id="representative-list">
              {umamusumes?.map((umamusume) => (
                <option key={umamusume.id} value={umamusume.name} />
              ))}
            </datalist>
            {errors.representative && errors.representative.type === 'required' && (
              <span role="alert" className="text-xs text-uma-text1">
                選択してください
              </span>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="support">育成サポート</Label>
            <TextField
              className="w-full"
              id="support"
              list="support-list"
              {...register('support', { required: true })}
            />
            <datalist id="support-list">
              {umamusumes?.map((umamusume) => (
                <option key={umamusume.id} value={umamusume.name} />
              ))}
            </datalist>
            {errors.support && errors.support.type === 'required' && (
              <span role="alert" className="text-xs text-uma-text1">
                選択してください
              </span>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="comment">コメント (任意、500文字まで)</Label>
            <TextField
              className="w-full h-24"
              id="comment"
              {...register('comment', { maxLength: 500 })}
              multiple
            />
            {errors.comment && errors.comment.type === 'maxLength' && (
              <span role="alert" className="text-xs text-uma-text1">
                500文字以内にしてください
              </span>
            )}
          </FormGroup>
          <PrimaryButton type="submit">作成</PrimaryButton>
        </form>
        <div className="mb-6 flex justify-center">
          <Link href="/" passHref>
            <SecondaryAnchorButton>募集一覧へ</SecondaryAnchorButton>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Page
