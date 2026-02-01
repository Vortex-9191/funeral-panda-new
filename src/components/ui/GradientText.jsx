import { motion } from 'framer-motion'

export default function GradientText({
  children,
  className = '',
  from = '#FF6B6B',
  to = '#FECA57',
  ...motionProps
}) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
      }}
      {...motionProps}
    >
      {children}
    </motion.span>
  )
}
