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

  const navigate = (to) => {
    if (to === path) return
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function usePath() {
  return useContext(RouterContext)
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate } = usePath()

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault()
      navigate(to)
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
  if (path !== routePath) return null
  return <Component />
}
