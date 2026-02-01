import { motion } from 'framer-motion'
import { useEffect } from 'react'

const dots = [0, 1, 2]

export default function CalculatingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="flex flex-1 flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Spinning ring */}
      <motion.div
        className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-cream/10"
        style={{ borderTopColor: '#FF6B6B', borderRightColor: '#FECA57' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      />

      <motion.p
        className="mb-4 text-heading font-bold text-cream"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        分析中
      </motion.p>

      {/* Animated dots */}
      <div className="flex gap-2">
        {dots.map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-coral"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.p
        className="mt-6 text-small text-cream/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        あなたにぴったりのプランを探しています...
      </motion.p>
    </motion.div>
  )
}
