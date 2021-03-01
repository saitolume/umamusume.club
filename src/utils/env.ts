export const env = {
  FIREBASE_CLIENT_CONFIG: process.env.FIREBASE_CLIENT_CONFIG ?? '{}',
  IS_DEV: process.env.NODE_ENV !== 'production',
} as const
