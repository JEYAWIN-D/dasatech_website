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
      'bg-[#6C2BD9] text-white hover:bg-[#8B5CF6] shadow-md shadow-[#6C2BD9]/20 border border-[#6C2BD9]',
    secondary:
      'bg-[#17121F] text-white hover:bg-[#2A2338] shadow-sm border border-[#17121F]',
    glass:
      'bg-white text-[#17121F] hover:text-[#6C2BD9] hover:border-[#DDD0FF] border border-[#E9E2F5] shadow-xs',
    dark:
      'bg-[#17121F] text-white hover:bg-[#2A2338] shadow-sm border border-[#17121F]',
    outline:
      'border border-[#DDD0FF] text-[#17121F] hover:text-[#6C2BD9] hover:border-[#6C2BD9] hover:bg-[#F5F0FF] bg-white/90',
  }[variant] || 'bg-[#6C2BD9] text-white hover:bg-[#8B5CF6] shadow-md border border-[#6C2BD9]'

  const arrowBgClasses = {
    primary: 'bg-white text-[#6C2BD9] group-hover:bg-[#F5F0FF]',
    secondary: 'bg-white text-[#17121F]',
    glass: 'bg-[#F5F0FF] text-[#6C2BD9] group-hover:bg-[#6C2BD9] group-hover:text-white',
    dark: 'bg-white text-[#17121F]',
    outline: 'bg-[#F5F0FF] text-[#6C2BD9] group-hover:bg-[#6C2BD9] group-hover:text-white',
  }[variant] || 'bg-white text-[#6C2BD9]'


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

