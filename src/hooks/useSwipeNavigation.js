import { useState, useCallback } from 'react'

export default function useSwipeNavigation(totalSlides) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= totalSlides) return
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    },
    [currentIndex, totalSlides],
  )

  const next = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection(1)
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex, totalSlides])

  const prev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex((i) => i - 1)
    }
  }, [currentIndex])

  return { currentIndex, direction, goTo, next, prev }
}
