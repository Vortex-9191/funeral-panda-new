import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import GradientText from '../../../components/ui/GradientText'
import Button from '../../../components/ui/Button'
import { saveDiagnosticResult } from '../../../utils/storage'
import { staggerContainer, staggerItem, floatingCard } from '../../../utils/animations'

function PlanCard({ item, index, gradientFrom, gradientTo }) {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-cream/8 bg-plum/50"
      variants={floatingCard}
      custom={index * 0.1}
    >
      <div
        className="h-[2px]"
        style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
      />
      <div className="flex items-start gap-3.5 px-4 py-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cream/8 text-[1.125rem]">
          {item.icon}
        </span>
        <div className="min-w-0">
          <h3 className="mb-0.5 text-[0.8125rem] font-bold text-cream">{item.title}</h3>
          <p className="text-[0.75rem] leading-relaxed text-cream/50">{item.description}</p>
        </div>
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
      className="flex flex-col px-5 pb-10 pt-[max(env(safe-area-inset-top),40px)]"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.div className="relative mb-6 flex flex-col items-center text-center" variants={staggerItem}>
        {/* Glow */}
        <motion.div
          className="pointer-events-none absolute -top-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-[50px]"
          style={{ background: `radial-gradient(circle, ${gradientFrom}30, ${gradientTo}15, transparent)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Emoji */}
        <motion.div
          className="relative mb-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.125rem]"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}25, ${gradientTo}25)`,
            boxShadow: `0 6px 24px ${gradientFrom}20`,
          }}
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
        >
          <span className="text-[2.25rem] leading-none">{emoji}</span>
        </motion.div>

        <motion.p
          className="relative mb-1.5 text-[0.6875rem] font-medium tracking-widest text-cream/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          YOUR FES TYPE
        </motion.p>

        <GradientText
          from={gradientFrom}
          to={gradientTo}
          className="relative text-[1.75rem] font-bold leading-tight"
        >
          {name}
        </GradientText>

        <motion.p
          className="relative mt-2 max-w-[260px] text-[0.8125rem] leading-relaxed text-cream/60"
          variants={staggerItem}
        >
          {tagline}
        </motion.p>
      </motion.div>

      {/* Section divider */}
      <motion.div className="mx-auto mb-5 flex items-center gap-2.5" variants={staggerItem}>
        <div className="h-px w-6 bg-cream/10" />
        <span className="text-[0.625rem] font-medium tracking-widest text-cream/25">YOUR PLAN</span>
        <div className="h-px w-6 bg-cream/10" />
      </motion.div>

      {/* Plan cards - 2x2 grid */}
      <motion.div className="mb-8 grid grid-cols-1 gap-2.5" variants={staggerContainer}>
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

      {/* Actions */}
      <motion.div className="flex flex-col items-center gap-2.5" variants={staggerItem}>
        <Button onClick={handleAccept} className="w-full max-w-[300px]">
          このプランで始める
        </Button>
        <button
          onClick={onRestart}
          className="py-2 text-[0.75rem] font-medium text-cream/35 transition-colors active:text-cream/60"
        >
          もう一度診断する
        </button>
      </motion.div>

      {/* Safe area bottom */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </motion.div>
  )
}
