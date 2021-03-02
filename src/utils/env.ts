export const env = {
  FIREBASE_CLIENT_CONFIG: process.env.FIREBASE_CLIENT_CONFIG ?? '{}',
  IS_CLIENT: typeof window !== 'undefined',
  IS_DEV: process.env.NODE_ENV !== 'production',
} as const
