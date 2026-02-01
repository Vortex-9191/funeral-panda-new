import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { markOnboardingComplete } from '../utils/storage'

export default function useOnboardingProgress() {
  const navigate = useNavigate()

  const completeOnboarding = useCallback(
    (redirectTo = '/diagnostic') => {
      markOnboardingComplete()
      navigate(redirectTo, { replace: true })
    },
    [navigate],
  )

  const skipOnboarding = useCallback(() => {
    markOnboardingComplete()
    navigate('/home', { replace: true })
  }, [navigate])

  return { completeOnboarding, skipOnboarding }
}
