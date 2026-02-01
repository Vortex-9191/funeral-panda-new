import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../../utils/animations'
import GradientText from '../../../components/ui/GradientText'
import Button from '../../../components/ui/Button'

export default function DiagnosticCTA({ data, onStart, onSkip }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      {/* Background glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald/20 via-coral/15 to-golden/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-10"
      >
        <motion.h1
          variants={staggerItem}
          className="whitespace-pre-line text-heading font-bold leading-heading"
        >
          <GradientText from="#34D399" to="#FECA57">
            {data.headline}
          </GradientText>
        </motion.h1>

        <motion.div variants={staggerItem} className="flex flex-col items-center gap-4">
          <Button onClick={onStart}>{data.ctaLabel}</Button>
          <Button variant="ghost" onClick={onSkip}>
            {data.skipLabel}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
