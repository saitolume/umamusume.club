import { Trainer } from '~/types'
import { firestore } from '~/utils/firebase'

export const trainerConverter: firebase.default.firestore.FirestoreDataConverter<Trainer> = {
  toFirestore(
    value: Pick<Trainer, 'comment' | 'name' | 'representativeId' | 'supportId' | 'trainerId'>
  ) {
    return {
      trainerId: value.trainerId,
      name: value.name,
      representativeId: value.representativeId,
      supportId: value.supportId,
      comment: value.comment,
      createdAt: firestore.FieldValue.serverTimestamp(),
    }
  },
  fromFirestore(doc): Trainer {
    const data = doc.data()
    return {
      id: doc.id,
      trainerId: data.trainerId,
      name: data.name,
      representativeId: data.representativeId,
      supportId: data.supportId,
      comment: data.comment,
      createdAt: data.createdAt.toDate().toString(),
    }
  },
}
