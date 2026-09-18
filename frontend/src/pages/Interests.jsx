import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'
import './Interests.css'

const interests = [
  'AI & Technology',
  'Financial Markets',
  'Indian Business',
  'Global Politics',
  'Startups',
  'Science',
  'Geopolitics',
  'Health & Medicine',
  'Climate & Energy',
  'Sports',
  'Culture & Arts',
  'Legal & Policy',
]

function Interests() {
  const navigate = useNavigate()

  const {
    interests: selectedInterests,
    setInterests: setSelectedInterests,
  } = useOnboarding()

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest)) {
        return prev.filter((item) => item !== interest)
      }

      if (prev.length >= 7) {
        return prev
      }

      return [...prev, interest]
    })
  }

  return (
    <section className="interests-page">
      <div className="interests-brand">
        <span className="brand-mark">▥</span>
        <span>Nuzio AI</span>
      </div>

      <div className="interests-progress">
        <span className="done"></span>
        <span className="active"></span>
        <span></span>
      </div>

      <div className="interests-content">
        <p className="step-label">STEP 2 OF 3</p>

        <h1>
          What moves
          <span> your world?</span>
        </h1>

        <p className="interests-subtitle">
          Pick up to 7 niches.
        </p>

        <p className="interest-count">
          {selectedInterests.length}/7 selected
        </p>

        <div className="interests-grid">
          {interests.map((interest) => {
            const selected = selectedInterests.includes(interest)

            return (
              <button
                key={interest}
                type="button"
                className={`interest-chip ${selected ? 'selected' : ''}`}
                onClick={() => toggleInterest(interest)}
              >
                {interest}

                {selected && (
                  <span>✓</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <button
        className="continue-btn"
        disabled={selectedInterests.length === 0}
        onClick={() => navigate('/voice')}
      >
        Continue →
      </button>
    </section>
  )
}

export default Interests