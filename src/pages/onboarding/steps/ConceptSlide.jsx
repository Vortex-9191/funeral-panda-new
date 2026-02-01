import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, floatingCard } from '../../../utils/animations'
import GradientText from '../../../components/ui/GradientText'

export default function ConceptSlide({ data }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-8"
      >
        <motion.h1
          variants={staggerItem}
          className="whitespace-pre-line text-heading font-bold leading-heading"
        >
          <GradientText>{data.headline}</GradientText>
        </motion.h1>

        {data.body && (
          <motion.p
            variants={staggerItem}
            className="whitespace-pre-line text-body leading-body text-lavender"
          >
            {data.body}
          </motion.p>
        )}

        {data.cards && (
          <motion.div
            variants={staggerContainer}
            className="mt-4 flex w-full max-w-xs justify-center gap-4"
          >
            {data.cards.map((card, i) => (
              <motion.div
                key={card.label}
                variants={floatingCard}
                custom={i * 0.15}
                className="flex flex-col items-center gap-2 rounded-2xl bg-plum/80 px-5 py-6 shadow-lg backdrop-blur-sm"
              >
                <span className="text-3xl" role="img" aria-label={card.label}>
                  {card.icon}
                </span>
                <span className="text-small font-medium text-cream">{card.label}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
