import { Routes, Route, Navigate } from 'react-router'
import OnboardingPage from './pages/onboarding/OnboardingPage'
import HomePage from './pages/home/HomePage'
import DiagnosticPage from './pages/diagnostic/DiagnosticPage'
import { hasCompletedOnboarding, getDiagnosticResult } from './utils/storage'

function RootRedirect() {
  if (!hasCompletedOnboarding()) return <Navigate to="/onboarding" replace />
  if (!getDiagnosticResult()) return <Navigate to="/diagnostic" replace />
  return <Navigate to="/home" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/diagnostic" element={<DiagnosticPage />} />
    </Routes>
  )
}
