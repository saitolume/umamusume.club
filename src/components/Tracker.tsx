import { useRouter } from 'next/router'
import { memo, useEffect, VFC } from 'react'
import { env } from '~/utils/env'
import { analytics } from '~/utils/firebase'

const PageTracker: VFC = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    if (!env.IS_CLIENT || env.IS_DEV) return
    analytics().setCurrentScreen(pathname)
    analytics().logEvent('page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: pathname,
    })
  }, [pathname])

  return null
}

export default memo(PageTracker)
