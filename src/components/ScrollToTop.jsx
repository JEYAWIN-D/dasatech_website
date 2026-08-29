import { useEffect } from 'react'
import { usePath } from './Router'

export default function ScrollToTop() {
  const { path } = usePath()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return null
}
