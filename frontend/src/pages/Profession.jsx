import { useState } from 'react'
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
  const [selectedProfession, setSelectedProfession] = useState('Technology')

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
          {professions.map((profession) => {
            const isSelected = selectedProfession === profession

            return (
              <button
                key={profession}
                type="button"
                className={`profession-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedProfession(profession)}
              >
                <span>{profession}</span>
                {isSelected && <span className="check">✓</span>}
              </button>
            )
          })}
        </div>
      </div>

      <button
        className="continue-btn"
        disabled={!selectedProfession}
        onClick={() => console.log(selectedProfession)}
      >
        Continue →
      </button>
    </section>
  )
}

export default Profession