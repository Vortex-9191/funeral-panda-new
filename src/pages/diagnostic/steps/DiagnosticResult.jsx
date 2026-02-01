import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import GradientText from '../../../components/ui/GradientText'
import Button from '../../../components/ui/Button'
import { saveDiagnosticResult } from '../../../utils/storage'
import { staggerContainer, staggerItem, floatingCard } from '../../../utils/animations'

function PlanCard({ item, index }) {
  return (
    <motion.div
      className="rounded-2xl border border-cream/10 bg-plum/60 p-5"
      variants={floatingCard}
      custom={index * 0.1}
    >
      <div className="mb-2 flex items-center gap-3">
        <span className="text-[1.5rem]">{item.icon}</span>
        <h3 className="text-body font-bold text-cream">{item.title}</h3>
      </div>
      <p className="text-small leading-body text-cream/70">{item.description}</p>
    </motion.div>
  )
}

export default function DiagnosticResult({ resultType, onRestart }) {
  const navigate = useNavigate()
  const { name, tagline, gradientFrom, gradientTo, emoji, plan } = resultType

  const handleAccept = () => {
    saveDiagnosticResult(resultType.id)
    navigate('/home')
  }

  const planItems = [plan.portrait, plan.coffin, plan.bgm, plan.venue]

  return (
    <motion.div
      className="flex flex-col px-6 pt-12 pb-12"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.div className="mb-8 text-center" variants={staggerItem}>
        <motion.div
          className="mb-3 text-[3.5rem]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          {emoji}
        </motion.div>

        <p className="mb-1 text-small font-medium text-cream/50">あなたのフェスタイプは</p>

        <GradientText
          from={gradientFrom}
          to={gradientTo}
          className="text-display font-bold"
        >
          {name}
        </GradientText>

        <motion.p
          className="mt-3 text-body leading-body text-cream/80"
          variants={staggerItem}
        >
          {tagline}
        </motion.p>
      </motion.div>

      {/* Plan cards */}
      <motion.div className="mb-10 flex flex-col gap-4" variants={staggerContainer}>
        {planItems.map((item, i) => (
          <PlanCard key={item.title} item={item} index={i} />
        ))}
      </motion.div>

      {/* Action buttons */}
      <motion.div className="flex flex-col items-center gap-3" variants={staggerItem}>
        <Button onClick={handleAccept}>このプランで始める</Button>
        <button
          onClick={onRestart}
          className="text-small font-medium text-lavender/60 transition-colors active:text-cream"
        >
          もう一度診断する
        </button>
      </motion.div>
    </motion.div>
  )
}
