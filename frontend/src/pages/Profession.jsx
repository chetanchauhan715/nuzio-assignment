import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'
import './Profession.css'

const professions = [
  'Finance & Trading',
  'Legal',
  'Technology',
  'Healthcare',
  'Consulting',
  'Marketing & Media',
  'Government & Policy',
  'Real Estate',
  'Education',
  'Founder / Builder',
]

function Profession() {
  const navigate = useNavigate()

  const {
    profession,
    setProfession,
  } = useOnboarding()

  return (
    <section className="profession-page">
      <div className="profession-brand">
        <span className="brand-mark">▥</span>
        <span>Nuzio AI</span>
      </div>

      <div className="progress-row">
        <span className="progress-active"></span>
        <span></span>
        <span></span>
      </div>

      <div className="profession-content">
        <p className="step-label">STEP 1 OF 3</p>

        <h1>
          What's your
          <span> profession?</span>
        </h1>

        <p className="profession-subtitle">
          We'll tune every brief to what actually moves your day.
        </p>

        <div className="profession-grid">
          {professions.map((item) => {
            const isSelected = profession === item

            return (
              <button
                key={item}
                type="button"
                className={`profession-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => setProfession(item)}
              >
                <span>{item}</span>

                {isSelected && (
                  <span className="check">✓</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <button
        className="continue-btn"
        disabled={!profession}
        onClick={() => navigate('/interests')}
      >
        Continue →
      </button>
    </section>
  )
}

export default Profession