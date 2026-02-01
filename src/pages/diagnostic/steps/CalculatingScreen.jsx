import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const messages = [
  'あなたの回答を分析中...',
  'フェスタイプを判定中...',
  'ぴったりのプランを作成中...',
]

export default function CalculatingScreen({ onComplete }) {
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(onComplete, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length)
    }, 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="flex min-h-dvh flex-col items-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[45%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral/20 via-violet/10 to-golden/20 blur-[60px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Upper space */}
      <div className="flex-[4]" />

      {/* Spinner */}
      <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[3px] border-cream/8" />
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-transparent"
          style={{ borderTopColor: '#FF6B6B', borderRightColor: '#FECA57' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.span
          className="relative text-[2rem]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          🔮
        </motion.span>
      </div>

      {/* Message */}
      <motion.p
        key={msgIndex}
        className="relative mb-6 text-[0.875rem] font-medium text-cream/60"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {messages[msgIndex]}
      </motion.p>

      {/* Progress bar */}
      <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-cream/8">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-coral to-golden"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.6, ease: 'easeInOut' }}
        />
      </div>

      {/* Lower space (slightly more to push content up) */}
      <div className="flex-[5]" />
    </motion.div>
  )
}
