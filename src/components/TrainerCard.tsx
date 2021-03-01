import dayjs from 'dayjs'
import { memo, useCallback, useRef, VFC } from 'react'
import { useSelector } from 'react-redux'
import { getTrainerById, getUmamusumeById } from '~/store'
import { Trainer } from '~/types'
import RoundedButton from './Button/RoundedButton'

type Props = {
  trainerId: Trainer['id']
}

const TrainerCard: VFC<Props> = (props) => {
  const trainer = useSelector(getTrainerById(props.trainerId))
  const representative = useSelector(getUmamusumeById(trainer.representativeId))
  const support = useSelector(getUmamusumeById(trainer.supportId))
  const trainerIdFieldRef = useRef<HTMLInputElement>(null)

  const handleClickCopyButton = useCallback(() => {
    if (trainerIdFieldRef.current === null) return
    trainerIdFieldRef.current.select()
    const isSuccessful = document.execCommand('copy')
    console.log(isSuccessful)
  }, [trainer.trainerId])

  return (
    <article className="border border-uma-border4 rounded py-2 px-3">
      <header className="text-uma-text1 font-bold border-b h-10 flex items-center mb-3">
        <h1>{trainer.name}</h1>
      </header>
      <section className="grid grid-cols-2 gap-x-3 gap-y-5 mb-4">
        <div>
          <dl>
            <dt className="font-bold text-uma-text2 border-b-2 border-uma-text2">トレーナーID</dt>
            <dd>
              <input
                className="font-bold text-uma-text1 w-full"
                ref={trainerIdFieldRef}
                value={trainer.trainerId}
                readOnly
              />
            </dd>
          </dl>
        </div>
        <div className="flex">
          <RoundedButton className="mt-auto" onClick={handleClickCopyButton}>
            IDコピー
          </RoundedButton>
        </div>
        <dl>
          <dt className="font-bold text-uma-text2 border-b-2 border-uma-text2">代表ウマ娘</dt>
          <dd className="text-uma-text1 font-bold">{representative?.name}</dd>
        </dl>
        <dl>
          <dt className="font-bold text-uma-text2 border-b-2 border-uma-text2">育成サポート</dt>
          <dd className="text-uma-text1 font-bold">{support?.name}</dd>
        </dl>
      </section>
      <p className="text-uma-text1 font-bold text-sm mb-4">{trainer.comment}</p>
      <footer className="text-uma-text2 text-sm font-bold">
        <time className="mr-1" dateTime={dayjs(trainer.createdAt).format('YYYY-MM-DDTHH:mm')}>
          {dayjs(trainer.createdAt).format('YYYY/MM/DD HH:mm')}
        </time>
        投稿
      </footer>
    </article>
  )
}

export default memo(TrainerCard)
