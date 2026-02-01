import { motion } from 'framer-motion'
import GradientText from '../../../components/ui/GradientText'
import Button from '../../../components/ui/Button'
import { staggerContainer, staggerItem } from '../../../utils/animations'

export default function DiagnosticIntro({ onStart }) {
  return (
    <motion.div
      className="flex flex-1 flex-col items-center justify-between px-6 pb-10 pt-20"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Top spacer */}
      <div />

      {/* Center content */}
      <div className="flex flex-col items-center text-center">
        {/* Background glow */}
        <motion.div
          className="absolute left-1/2 top-[40%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral/15 via-violet/10 to-golden/15 blur-[80px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          variants={staggerItem}
          className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-plum to-plum/60 shadow-lg shadow-violet/20"
        >
          <span className="text-[2.8rem] leading-none">🎪</span>
        </motion.div>

        <motion.h1
          className="relative mb-4 text-[1.75rem] font-bold leading-tight text-cream"
          variants={staggerItem}
        >
          あなたの
          <br />
          <GradientText className="text-[2rem] font-bold">フェスタイプ</GradientText>
          <br />
          を診断しよう
        </motion.h1>

        <motion.p
          className="relative max-w-[260px] text-[0.9375rem] leading-relaxed text-cream/60"
          variants={staggerItem}
        >
          6つの質問に答えるだけで、
          あなたにぴったりの葬儀プランが見つかります。
        </motion.p>
      </div>

      {/* Bottom CTA */}
      <motion.div className="relative flex w-full flex-col items-center gap-4" variants={staggerItem}>
        <Button onClick={onStart} className="w-full max-w-[320px]">
          診断スタート
        </Button>
        <p className="text-[0.75rem] text-cream/30">所要時間：約1分</p>
      </motion.div>
    </motion.div>
  )
}
