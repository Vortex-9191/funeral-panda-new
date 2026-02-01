import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import GradientText from '../../../components/ui/GradientText'
import Button from '../../../components/ui/Button'
import { saveDiagnosticResult } from '../../../utils/storage'
import { staggerContainer, staggerItem, floatingCard } from '../../../utils/animations'

function PlanCard({ item, index, gradientFrom, gradientTo }) {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-cream/8 bg-plum/50 backdrop-blur-sm"
      variants={floatingCard}
      custom={index * 0.1}
    >
      {/* Card accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <div className="px-5 py-4">
        <div className="mb-2.5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream/8 text-[1.25rem]">
            {item.icon}
          </span>
          <h3 className="text-[0.9375rem] font-bold text-cream">{item.title}</h3>
        </div>
        <p className="pl-[52px] text-[0.8125rem] leading-relaxed text-cream/60">{item.description}</p>
      </div>
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
      className="flex flex-col px-5 pb-12 pt-10"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Hero section */}
      <motion.div className="relative mb-8 text-center" variants={staggerItem}>
        {/* Background glow */}
        <motion.div
          className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full blur-[60px]"
          style={{
            background: `radial-gradient(circle, ${gradientFrom}30, ${gradientTo}15, transparent)`,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Emoji badge */}
        <motion.div
          className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[1.25rem] shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}25, ${gradientTo}25)`,
            boxShadow: `0 8px 32px ${gradientFrom}20`,
          }}
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
        >
          <span className="text-[2.5rem] leading-none">{emoji}</span>
        </motion.div>

        <motion.p
          className="relative mb-2 text-[0.75rem] font-medium tracking-wider text-cream/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          YOUR FES TYPE
        </motion.p>

        <GradientText
          from={gradientFrom}
          to={gradientTo}
          className="relative text-[2rem] font-bold leading-tight"
        >
          {name}
        </GradientText>

        <motion.p
          className="relative mx-auto mt-3 max-w-[280px] text-[0.9375rem] leading-relaxed text-cream/70"
          variants={staggerItem}
        >
          {tagline}
        </motion.p>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="mx-auto mb-6 flex items-center gap-3"
        variants={staggerItem}
      >
        <div className="h-px w-8 bg-cream/10" />
        <span className="text-[0.6875rem] font-medium tracking-wider text-cream/30">YOUR PLAN</span>
        <div className="h-px w-8 bg-cream/10" />
      </motion.div>

      {/* Plan cards */}
      <motion.div className="mb-10 flex flex-col gap-3" variants={staggerContainer}>
        {planItems.map((item, i) => (
          <PlanCard
            key={item.title}
            item={item}
            index={i}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
          />
        ))}
      </motion.div>

      {/* Action buttons */}
      <motion.div
        className="sticky bottom-6 flex flex-col items-center gap-3"
        variants={staggerItem}
      >
        <Button onClick={handleAccept} className="w-full max-w-[320px]">
          このプランで始める
        </Button>
        <button
          onClick={onRestart}
          className="py-2 text-[0.8125rem] font-medium text-cream/40 transition-colors active:text-cream/70"
        >
          もう一度診断する
        </button>
      </motion.div>
    </motion.div>
  )
}
