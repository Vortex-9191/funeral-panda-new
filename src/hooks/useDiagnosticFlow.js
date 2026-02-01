import { useState, useCallback } from 'react'
import { questions, TOTAL_QUESTIONS, calculateResult, resultTypes } from '../data/diagnosticContent'

// phases: 'intro' | 'question' | 'calculating' | 'result'
export default function useDiagnosticFlow() {
  const [phase, setPhase] = useState('intro')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [direction, setDirection] = useState(1)
  const [resultType, setResultType] = useState(null)

  const startDiagnostic = useCallback(() => {
    setPhase('question')
    setQuestionIndex(0)
    setAnswers([])
    setDirection(1)
  }, [])

  const answerQuestion = useCallback((choiceType) => {
    const newAnswers = [...answers, choiceType]
    setAnswers(newAnswers)
    setDirection(1)

    if (newAnswers.length >= TOTAL_QUESTIONS) {
      const typeId = calculateResult(newAnswers)
      setResultType(resultTypes[typeId])
      setPhase('calculating')
    } else {
      setQuestionIndex((prev) => prev + 1)
    }
  }, [answers])

  const goToPreviousQuestion = useCallback(() => {
    if (questionIndex > 0) {
      setDirection(-1)
      setAnswers((prev) => prev.slice(0, -1))
      setQuestionIndex((prev) => prev - 1)
    }
  }, [questionIndex])

  const showResult = useCallback(() => {
    setPhase('result')
  }, [])

  const restart = useCallback(() => {
    setPhase('intro')
    setQuestionIndex(0)
    setAnswers([])
    setDirection(1)
    setResultType(null)
  }, [])

  return {
    phase,
    questionIndex,
    direction,
    currentQuestion: questions[questionIndex] || null,
    totalQuestions: TOTAL_QUESTIONS,
    resultType,
    startDiagnostic,
    answerQuestion,
    goToPreviousQuestion,
    showResult,
    restart,
  }
}
