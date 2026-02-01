import { motion } from 'framer-motion'
import { slideVariants } from '../../../utils/animations'

const choiceAccents = [
  { bg: 'bg-coral/10', border: 'border-coral/15 active:border-coral/50', dot: 'bg-coral' },
  { bg: 'bg-emerald/10', border: 'border-emerald/15 active:border-emerald/50', dot: 'bg-emerald' },
  { bg: 'bg-violet/10', border: 'border-violet/15 active:border-violet/50', dot: 'bg-violet' },
  { bg: 'bg-golden/10', border: 'border-golden/15 active:border-golden/50', dot: 'bg-golden' },
]

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
      className="flex min-h-dvh flex-col px-5"
    >
      {/* Fixed header area */}
      <div className="pb-2 pt-[max(env(safe-area-inset-top),12px)]">
        {/* Nav row */}
        <div className="flex h-12 items-center gap-2">
          <div className="w-10">
            {questionIndex > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onBack}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/5 text-cream/50 active:bg-cream/10"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>
            )}
          </div>

          {/* Segmented progress */}
          <div className="flex flex-1 items-center gap-1.5">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <div key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-cream/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-coral to-golden"
                  initial={false}
                  animate={{ width: i <= questionIndex ? '100%' : '0%' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>
            ))}
          </div>

          <span className="w-10 text-right text-[0.6875rem] tabular-nums text-cream/35">
            {questionIndex + 1}/{totalQuestions}
          </span>
        </div>
      </div>

      {/* Question area: takes remaining space, vertically centered */}
      <div className="flex flex-1 flex-col justify-center py-4">
        {/* Q badge + text */}
        <div className="mb-6">
          <motion.span
            className="mb-3 inline-block rounded-full bg-gradient-to-r from-coral to-golden px-3 py-0.5 text-[0.6875rem] font-bold text-indigo-deep"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 }}
          >
            Q{questionIndex + 1}
          </motion.span>

          <motion.h2
            className="whitespace-pre-line text-[1.25rem] font-bold leading-snug text-cream"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.35 }}
          >
            {question.text}
          </motion.h2>
        </div>

        {/* Choices */}
        <div className="flex flex-col gap-2.5">
          {question.choices.map((choice, i) => {
            const accent = choiceAccents[i]
            return (
              <motion.button
                key={choice.type}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + i * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onAnswer(choice.type)}
                className={`flex items-center gap-3 rounded-xl border ${accent.border} ${accent.bg} px-4 py-3.5 text-left transition-colors`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${accent.dot} opacity-60`} />
                <span className="text-[0.875rem] font-medium leading-snug text-cream/90">
                  {choice.label}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Bottom spacer for safe area */}
      <div className="h-[max(env(safe-area-inset-bottom),20px)]" />
    </motion.div>
  )
}
