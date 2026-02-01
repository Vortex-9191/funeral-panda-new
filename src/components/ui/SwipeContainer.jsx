import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants, swipeConfidenceThreshold, swipePower } from '../../utils/animations'

export default function SwipeContainer({
  currentIndex,
  direction,
  onNext,
  onPrev,
  children,
}) {
  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={(_, { offset, velocity }) => {
          const power = swipePower(offset.x, velocity.x)
          if (power < -swipeConfidenceThreshold) {
            onNext()
          } else if (power > swipeConfidenceThreshold) {
            onPrev()
          }
        }}
        className="flex h-full w-full flex-1 flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
