import { motion } from 'framer-motion'
import GradientText from '../../../components/ui/GradientText'
import Button from '../../../components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '../../../utils/animations'

export default function DiagnosticIntro({ onStart }) {
  return (
    <motion.div
      className="flex flex-1 flex-col items-center justify-center px-6 text-center"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={staggerItem} className="mb-2 text-[3rem]">
        🎪
      </motion.div>

      <motion.h1
        className="mb-3 text-heading font-bold leading-heading text-cream"
        variants={staggerItem}
      >
        あなたの
        <GradientText className="text-heading font-bold">フェスタイプ</GradientText>
        は？
      </motion.h1>

      <motion.p
        className="mb-10 text-body leading-body text-cream/70"
        variants={staggerItem}
      >
        6つの質問に答えるだけで、
        <br />
        あなたにぴったりの
        <br />
        葬儀プランが見つかります。
      </motion.p>

      <motion.div variants={staggerItem}>
        <Button onClick={onStart}>診断スタート</Button>
      </motion.div>
    </motion.div>
  )
}
