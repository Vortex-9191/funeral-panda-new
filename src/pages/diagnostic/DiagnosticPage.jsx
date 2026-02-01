import { AnimatePresence } from 'framer-motion'
import FullScreenLayout from '../../components/layout/FullScreenLayout'
import ParticleBackground from '../../components/ui/ParticleBackground'
import DiagnosticIntro from './steps/DiagnosticIntro'
import QuestionCard from './steps/QuestionCard'
import CalculatingScreen from './steps/CalculatingScreen'
import DiagnosticResult from './steps/DiagnosticResult'
import useDiagnosticFlow from '../../hooks/useDiagnosticFlow'

export default function DiagnosticPage() {
  const {
    phase,
    questionIndex,
    direction,
    currentQuestion,
    totalQuestions,
    resultType,
    startDiagnostic,
    answerQuestion,
    goToPreviousQuestion,
    showResult,
    restart,
  } = useDiagnosticFlow()

  const isScrollable = phase === 'result'

  return (
    <FullScreenLayout>
      <ParticleBackground />

      <div
        className={`relative flex flex-1 flex-col overflow-x-hidden ${
          isScrollable ? 'overflow-y-auto' : 'overflow-y-hidden'
        }`}
      >
        <AnimatePresence mode="wait" custom={direction}>
          {phase === 'intro' && (
            <DiagnosticIntro key="intro" onStart={startDiagnostic} />
          )}

          {phase === 'question' && currentQuestion && (
            <QuestionCard
              key={`q-${questionIndex}`}
              question={currentQuestion}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              direction={direction}
              onAnswer={answerQuestion}
              onBack={goToPreviousQuestion}
            />
          )}

          {phase === 'calculating' && (
            <CalculatingScreen key="calculating" onComplete={showResult} />
          )}

          {phase === 'result' && resultType && (
            <DiagnosticResult
              key="result"
              resultType={resultType}
              onRestart={restart}
            />
          )}
        </AnimatePresence>
      </div>
    </FullScreenLayout>
  )
}
