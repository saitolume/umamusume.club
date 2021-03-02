import firebase from 'firebase/app'
import { env } from '~/utils/env'
import 'firebase/analytics'
import 'firebase/firestore'

if (firebase.apps.length === 0) {
  firebase.initializeApp(JSON.parse(env.FIREBASE_CLIENT_CONFIG))
}

export const analytics = firebase.analytics
export const firestore = firebase.firestore
