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
      className="flex flex-1 flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral/20 via-violet/10 to-golden/20 blur-[60px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Spinner container */}
      <div className="relative mb-10 flex h-28 w-28 items-center justify-center">
        {/* Track */}
        <div className="absolute inset-0 rounded-full border-[3px] border-cream/8" />
        {/* Spinning arc */}
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-transparent"
          style={{ borderTopColor: '#FF6B6B', borderRightColor: '#FECA57' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner icon */}
        <motion.span
          className="relative text-[2.5rem]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          🔮
        </motion.span>
      </div>

      {/* Cycling message */}
      <motion.p
        key={msgIndex}
        className="relative text-[0.9375rem] font-medium text-cream/70"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {messages[msgIndex]}
      </motion.p>

      {/* Progress bar */}
      <div className="relative mt-8 h-1 w-48 overflow-hidden rounded-full bg-cream/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-coral to-golden"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.6, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
