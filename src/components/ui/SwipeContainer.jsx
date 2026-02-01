import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants } from '../../utils/animations'

const SWIPE_THRESHOLD = 50

export default function SwipeContainer({
  currentIndex,
  direction,
  onNext,
  onPrev,
  children,
}) {
  const touchStart = useRef(null)

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    touchStart.current = null
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) onNext()
      else onPrev()
    }
  }

  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex h-full w-full flex-1 flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
