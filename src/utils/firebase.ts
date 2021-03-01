import firebase from 'firebase/app'
import 'firebase/firestore'
import { env } from '~/utils/env'

if (firebase.apps.length === 0) {
  firebase.initializeApp(JSON.parse(env.FIREBASE_CLIENT_CONFIG))
}

export const firestore = firebase.firestore
