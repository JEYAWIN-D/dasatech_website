import React, { createContext, useContext, useState, useEffect } from 'react'

const RouterContext = createContext({
  path: '/',
  navigate: () => {}
})

export function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname || '/')

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname || '/')
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
    if (to === path) {
      scrollToTop()
      return
    }
    window.history.pushState({}, '', to)
    setPath(to)
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

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault()
      if (to === path) {
        scrollToTop()
      } else {
        navigate(to)
      }
    }
  }

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
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
