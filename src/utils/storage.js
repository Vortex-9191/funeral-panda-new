const ONBOARDING_KEY = 'funeral-panda:onboarding-completed'

export function hasCompletedOnboarding() {
  try {
    return localStorage.getItem(ONBOARDING_KEY) === 'true'
  } catch {
    return false
  }
}

export function markOnboardingComplete() {
  try {
    localStorage.setItem(ONBOARDING_KEY, 'true')
  } catch {
    // localStorage unavailable
  }
}

const DIAGNOSTIC_KEY = 'funeral-panda:diagnostic-result'

export function saveDiagnosticResult(resultTypeId) {
  try {
    localStorage.setItem(DIAGNOSTIC_KEY, resultTypeId)
  } catch {
    // localStorage unavailable
  }
}

export function getDiagnosticResult() {
  try {
    return localStorage.getItem(DIAGNOSTIC_KEY)
  } catch {
    return null
  }
}
