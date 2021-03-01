import { FC, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useDispatch } from 'react-redux'
import { actions } from '~/store'
import { Umamusume } from '~/types'
import { firestore } from '~/utils/firebase'

const UmamusumeProvider: FC = () => {
  const dispatch = useDispatch()

  const [umamusumes] = useCollectionData<Umamusume>(
    firestore().collection('umamusumes').orderBy('name'),
    {
      idField: 'id',
    }
  )

  useEffect(() => {
    dispatch(actions.updateUmamusume(umamusumes ?? []))
  }, [umamusumes])

  return null
}

export default UmamusumeProvider
