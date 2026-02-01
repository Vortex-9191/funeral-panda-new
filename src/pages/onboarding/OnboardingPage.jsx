import FullScreenLayout from '../../components/layout/FullScreenLayout'
import ParticleBackground from '../../components/ui/ParticleBackground'
import ProgressDots from '../../components/ui/ProgressDots'
import SwipeContainer from '../../components/ui/SwipeContainer'
import WelcomeSplash from './steps/WelcomeSplash'
import ConceptSlide from './steps/ConceptSlide'
import DiagnosticCTA from './steps/DiagnosticCTA'
import useSwipeNavigation from '../../hooks/useSwipeNavigation'
import useOnboardingProgress from '../../hooks/useOnboardingProgress'
import { slides, TOTAL_SLIDES } from '../../data/onboardingContent'

function renderSlide(slide, handlers) {
  switch (slide.type) {
    case 'welcome':
      return <WelcomeSplash data={slide} />
    case 'concept':
      return <ConceptSlide data={slide} />
    case 'cta':
      return (
        <DiagnosticCTA
          data={slide}
          onStart={handlers.completeOnboarding}
          onSkip={handlers.skipOnboarding}
        />
      )
    default:
      return null
  }
}

export default function OnboardingPage() {
  const { currentIndex, direction, next, prev } = useSwipeNavigation(TOTAL_SLIDES)
  const { completeOnboarding, skipOnboarding } = useOnboardingProgress()

  const currentSlide = slides[currentIndex]

  return (
    <FullScreenLayout>
      <ParticleBackground />

      <div className="relative flex flex-1 flex-col">
        <SwipeContainer
          currentIndex={currentIndex}
          direction={direction}
          onNext={next}
          onPrev={prev}
        >
          {renderSlide(currentSlide, { completeOnboarding, skipOnboarding })}
        </SwipeContainer>
      </div>

      {/* Navigation area */}
      <div className="safe-bottom relative z-20 flex flex-col items-center gap-4 pb-8 pt-4">
        <ProgressDots total={TOTAL_SLIDES} current={currentIndex} />

        {currentIndex < TOTAL_SLIDES - 1 && (
          <button
            onClick={next}
            className="text-small font-medium text-lavender/60 transition-colors active:text-cream"
          >
            タップして次へ
          </button>
        )}
      </div>
    </FullScreenLayout>
  )
}
