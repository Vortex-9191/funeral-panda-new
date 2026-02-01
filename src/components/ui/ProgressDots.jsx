import { motion } from 'framer-motion'

export default function ProgressDots({ total, current }) {
  return (
    <div className="flex items-center gap-2" role="tablist" aria-label="オンボーディング進捗">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          role="tab"
          aria-selected={i === current}
          aria-label={`スライド ${i + 1}/${total}`}
          className="rounded-full"
          animate={{
            width: i === current ? 24 : 8,
            backgroundColor: i === current ? '#FF6B6B' : '#C4B5FD',
            opacity: i === current ? 1 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{ height: 8 }}
        />
      ))}
    </div>
  )
}
