import { motion } from 'framer-motion'
import { slideVariants } from '../../../utils/animations'

const choiceColors = [
  'from-coral/20 to-coral/5 border-coral/20 active:border-coral/60',
  'from-emerald/20 to-emerald/5 border-emerald/20 active:border-emerald/60',
  'from-violet/20 to-violet/5 border-violet/20 active:border-violet/60',
  'from-golden/20 to-golden/5 border-golden/20 active:border-golden/60',
]

const choiceLabels = ['A', 'B', 'C', 'D']

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  direction,
  onAnswer,
  onBack,
}) {
  return (
    <motion.div
      key={question.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="flex flex-1 flex-col px-5 pb-8 pt-[env(safe-area-inset-top,48px)]"
    >
      {/* Header: back + progress */}
      <div className="mb-2 flex items-center gap-3">
        <div className="w-12">
          {questionIndex > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={onBack}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/5 text-cream/50 active:bg-cream/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>
          )}
        </div>

        <div className="flex flex-1 items-center gap-2">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-cream/8">
              <motion.div
                className="h-full rounded-full"
                initial={false}
                animate={{
                  width: i < questionIndex ? '100%' : i === questionIndex ? '100%' : '0%',
                  backgroundColor: i <= questionIndex ? '#FF6B6B' : 'transparent',
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          ))}
        </div>

        <span className="w-12 text-right text-[0.75rem] font-medium tabular-nums text-cream/40">
          {questionIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Question number badge */}
      <motion.div
        className="mb-4 mt-6 self-start"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="rounded-full bg-gradient-to-r from-coral to-golden px-3.5 py-1 text-[0.75rem] font-bold text-indigo-deep">
          Q{questionIndex + 1}
        </span>
      </motion.div>

      {/* Question text */}
      <motion.h2
        className="mb-8 whitespace-pre-line text-[1.375rem] font-bold leading-snug text-cream"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {question.text}
      </motion.h2>

      {/* Choices */}
      <div className="mt-auto flex flex-col gap-3">
        {question.choices.map((choice, i) => (
          <motion.button
            key={choice.type}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.35 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onAnswer(choice.type)}
            className={`flex items-center gap-3.5 rounded-2xl border bg-gradient-to-r px-4 py-4 text-left transition-colors ${choiceColors[i]}`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cream/10 text-[0.75rem] font-bold text-cream/70">
              {choiceLabels[i]}
            </span>
            <span className="text-[0.9375rem] font-medium leading-snug text-cream">
              {choice.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
