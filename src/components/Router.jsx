import React, { createContext, useContext, useState, useEffect } from 'react'

const RAW_BASE = import.meta.env.BASE_URL || '/'
const BASE_PATH = RAW_BASE.endsWith('/') && RAW_BASE.length > 1 ? RAW_BASE.slice(0, -1) : (RAW_BASE === '/' ? '' : RAW_BASE)

export function normalizePath(pathname) {
  let p = pathname || '/'
  if (BASE_PATH && p.startsWith(BASE_PATH)) {
    p = p.slice(BASE_PATH.length)
  }
  if (!p || p === '') p = '/'
  if (p.length > 1 && p.endsWith('/')) {
    p = p.slice(0, -1)
  }
  return p
}

export function formatUrl(to) {
  if (!to) return BASE_PATH || '/'
  const cleanTo = to.startsWith('/') ? to : '/' + to
  if (!BASE_PATH) return cleanTo
  return cleanTo === '/' ? BASE_PATH + '/' : BASE_PATH + cleanTo
}

const RouterContext = createContext({
  path: '/',
  navigate: () => {}
})

export function Router({ children }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => {
      setPath(normalizePath(window.location.pathname))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigate = (to) => {
    const normalizedTo = normalizePath(to)
    if (normalizedTo === path) {
      scrollToTop()
      return
    }
    const fullUrl = formatUrl(to)
    window.history.pushState({}, '', fullUrl)
    setPath(normalizedTo)
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <RouterContext.Provider value={{ path, navigate, scrollToTop }}>
      {children}
    </RouterContext.Provider>
  )
}

export function usePath() {
  return useContext(RouterContext)
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate, path, scrollToTop } = usePath()
  const targetHref = formatUrl(to)

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault()
      if (normalizePath(to) === path) {
        scrollToTop()
      } else {
        navigate(to)
      }
    }
  }

  return (
    <a href={targetHref} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}

export function Route({ path: routePath, component: Component }) {
  const { path } = usePath()
  if (routePath === '/team' && path.startsWith('/team')) {
    return <Component />
  }
  if (routePath === '/services/:serviceId' && path.startsWith('/services/') && path !== '/services') {
    return <Component />
  }
  if (routePath === '/products/:productId' && path.startsWith('/products/') && path !== '/products') {
    return <Component />
  }
  if (routePath === '/projects/:projectId' && path.startsWith('/projects/') && path !== '/projects') {
    return <Component />
  }
  if (routePath === '/automations/:automationId' && path.startsWith('/automations/') && path !== '/automations') {
    return <Component />
  }
  if (path !== routePath) return null
  return <Component />
}
