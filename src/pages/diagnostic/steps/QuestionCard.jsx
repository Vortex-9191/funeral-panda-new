import { motion } from 'framer-motion'
import { fadeInUp, slideVariants } from '../../../utils/animations'

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
      className="flex flex-1 flex-col px-6 pt-12 pb-4"
    >
      {/* Progress */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-cream/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-coral to-golden"
            initial={{ width: 0 }}
            animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <span className="text-small font-medium text-cream/50">
          {questionIndex + 1}/{totalQuestions}
        </span>
      </div>

      {/* Question */}
      <motion.h2
        className="mb-8 whitespace-pre-line text-heading font-bold leading-heading text-cream"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {question.text}
      </motion.h2>

      {/* Choices */}
      <div className="flex flex-col gap-3">
        {question.choices.map((choice, i) => (
          <motion.button
            key={choice.type}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onAnswer(choice.type)}
            className="rounded-2xl border border-cream/10 bg-plum/60 px-5 py-4 text-left text-body font-medium text-cream transition-colors active:border-coral/50 active:bg-plum"
          >
            {choice.label}
          </motion.button>
        ))}
      </div>

      {/* Back button */}
      {questionIndex > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={onBack}
          className="mt-6 self-center text-small font-medium text-lavender/60 transition-colors active:text-cream"
        >
          ← 前の質問に戻る
        </motion.button>
      )}
    </motion.div>
  )
}
