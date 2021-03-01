import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '~/components/Button/PrimaryButton'
import SecondaryAnchorButton from '~/components/Button/SecondaryAnchorButton'
import FormGroup from '~/components/FormGroup'
import Heading from '~/components/Heading'
import Label from '~/components/Label'
import TextField from '~/components/TextField'
import TrainerCard from '~/components/TrainerCard'

const Page: NextPage = () => {
  return (
    <div>
      <section className="mb-10">
        <Heading>検索</Heading>
        <form className="px-3 flex flex-col items-center">
          <FormGroup>
            <Label htmlFor="representative">代表ウマ娘</Label>
            <TextField
              className="w-full"
              id="representative"
              name="representative"
              list="representative-list"
            />
            <datalist id="representative-list">
              <option value="シンボリルドルフ" />
            </datalist>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="support">育成サポート</Label>
            <TextField
              className="w-full"
              id="support"
              name="support"
              list="representative-list"
            />
            <datalist id="support-list">
              <option value="シンボリルドルフ" />
            </datalist>
          </FormGroup>
          <PrimaryButton>検索</PrimaryButton>
        </form>
      </section>
      <section>
        <Heading>募集</Heading>
        <div className="mb-6 flex justify-center">
          <Link href="/trainers/new" passHref>
            <SecondaryAnchorButton>新しい募集を作る</SecondaryAnchorButton>
          </Link>
        </div>
        <ul className="px-3 pb-16">
          <li>
            <TrainerCard />
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Page
