import { motion } from 'framer-motion'

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  if (variant === 'ghost') {
    return (
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={`rounded-full px-6 py-3 text-body font-medium text-lavender transition-colors active:text-cream ${className}`}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`rounded-full bg-gradient-to-r from-coral to-golden px-8 py-4 text-body font-bold text-indigo-deep shadow-lg shadow-coral/25 transition-shadow active:shadow-coral/40 ${className}`}
    >
      {children}
    </motion.button>
  )
}
