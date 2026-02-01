import { Routes, Route, Navigate } from 'react-router'
import OnboardingPage from './pages/onboarding/OnboardingPage'
import HomePage from './pages/home/HomePage'
import DiagnosticPage from './pages/diagnostic/DiagnosticPage'
import { hasCompletedOnboarding } from './utils/storage'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          hasCompletedOnboarding() ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/onboarding" replace />
          )
        }
      />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/diagnostic" element={<DiagnosticPage />} />
    </Routes>
  )
}
