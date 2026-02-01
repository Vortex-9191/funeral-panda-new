import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, pulseGlow } from '../../../utils/animations'
import GradientText from '../../../components/ui/GradientText'

export default function WelcomeSplash({ data }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      {/* Glowing orb */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral/30 via-violet/20 to-golden/30 blur-3xl"
        {...pulseGlow}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <motion.p
          variants={staggerItem}
          className="text-small font-medium tracking-widest text-lavender uppercase"
        >
          {data.subtitle}
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="whitespace-pre-line text-display font-extrabold leading-display"
        >
          <GradientText>{data.headline}</GradientText>
        </motion.h1>
      </motion.div>

      {/* Swipe hint */}
      <motion.div
        className="absolute bottom-24 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="h-10 w-6 rounded-full border-2 border-lavender/40 p-1"
          aria-hidden="true"
        >
          <motion.div
            className="h-2 w-2 rounded-full bg-lavender"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <span className="text-xs text-lavender/60">スワイプして始める</span>
      </motion.div>
    </div>
  )
}
