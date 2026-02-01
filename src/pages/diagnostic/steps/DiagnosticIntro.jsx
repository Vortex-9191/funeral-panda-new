import { motion } from 'framer-motion'
import GradientText from '../../../components/ui/GradientText'
import Button from '../../../components/ui/Button'
import { staggerContainer, staggerItem } from '../../../utils/animations'

export default function DiagnosticIntro({ onStart }) {
  return (
    <motion.div
      className="flex min-h-dvh flex-col px-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[38%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral/15 via-violet/10 to-golden/15 blur-[80px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top: 35% of screen */}
      <div className="flex flex-[3.5] items-end justify-center pb-6">
        <motion.div
          variants={staggerItem}
          className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-3xl bg-gradient-to-br from-plum to-plum/60 shadow-lg shadow-violet/20"
        >
          <span className="text-[2.6rem] leading-none">🎪</span>
        </motion.div>
      </div>

      {/* Center: text block */}
      <div className="relative flex flex-col items-center text-center">
        <motion.h1
          className="mb-3 text-[1.625rem] font-bold leading-tight text-cream"
          variants={staggerItem}
        >
          あなたの
          <br />
          <GradientText className="text-[1.875rem] font-bold">フェスタイプ</GradientText>
          <br />
          を診断しよう
        </motion.h1>

        <motion.p
          className="max-w-[260px] text-[0.875rem] leading-relaxed text-cream/55"
          variants={staggerItem}
        >
          6つの質問に答えるだけで、
          あなたにぴったりの葬儀プランが見つかります。
        </motion.p>
      </div>

      {/* Bottom: 35% of screen with CTA */}
      <div className="flex flex-[3.5] flex-col items-center justify-center gap-3 pb-6">
        <motion.div className="relative w-full max-w-[300px]" variants={staggerItem}>
          <Button onClick={onStart} className="w-full">
            診断スタート
          </Button>
        </motion.div>
        <motion.p className="text-[0.6875rem] text-cream/30" variants={staggerItem}>
          所要時間：約1分
        </motion.p>
      </div>
    </motion.div>
  )
}
