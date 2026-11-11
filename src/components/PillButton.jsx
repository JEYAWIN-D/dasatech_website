import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from './Router.jsx'

export default function PillButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'glass' | 'dark' | 'outline' | 'secondary'
  arrow = 'right', // 'right' | 'up-right' | 'none'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon: IconComponent,
  type = 'button',
}) {
  const isUpRight = arrow === 'up-right'
  const hasArrow = arrow !== 'none'

  const sizeClasses = {
    sm: 'py-2 px-4 text-xs gap-2',
    md: hasArrow ? 'py-1.5 pl-6 pr-2 text-sm gap-3' : 'py-3 px-6 text-sm gap-2.5',
    lg: hasArrow ? 'py-2 pl-7 pr-2.5 text-base gap-3.5' : 'py-3.5 px-8 text-base gap-3',
  }[size]

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-600 hover:via-orange-600 hover:to-rose-700 text-white shadow-lg shadow-orange-500/25 border border-amber-300/40',
    secondary:
      'bg-[#141017] text-white hover:bg-[#201825] shadow-sm border border-amber-500/20',
    glass:
      'bg-white text-[#141017] hover:text-amber-700 hover:border-amber-300 border border-[#EFE6D8] shadow-xs',
    dark:
      'bg-[#141017] text-white hover:bg-[#201825] shadow-sm border border-amber-500/25',
    outline:
      'border border-amber-300/80 text-[#141017] hover:text-amber-800 hover:border-amber-500 hover:bg-amber-50/70 bg-white/90',
  }[variant] || 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md border border-amber-300/40'

  const arrowBgClasses = {
    primary: 'bg-white text-orange-600 group-hover:bg-amber-50',
    secondary: 'bg-white text-[#141017]',
    glass: 'bg-amber-50 text-amber-700 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-rose-600 group-hover:text-white',
    dark: 'bg-white text-[#141017]',
    outline: 'bg-amber-50 text-amber-700 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-rose-600 group-hover:text-white',
  }[variant] || 'bg-white text-orange-600'


  const content = (
    <motion.span
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 340, damping: 20 }}
      className={`group relative inline-flex items-center justify-center font-display font-semibold rounded-full overflow-hidden transition-all duration-200 cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
    >
      {IconComponent && <IconComponent className="w-4 h-4 text-blue-500 group-hover:text-blue-600 transition" />}
      <span>{children}</span>

      {hasArrow && (
        <motion.span
          className={`w-7 h-7 rounded-full flex items-center justify-center shadow-sm shrink-0 transition-all duration-200 ${arrowBgClasses}`}
          initial={{ x: 0, y: 0 }}
          whileHover={{
            x: isUpRight ? 1 : 2,
            y: isUpRight ? -1 : 0,
          }}
        >
          {isUpRight ? (
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          ) : (
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          )}
        </motion.span>
      )}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} className="inline-block" onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block" onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}

