import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'
import { savePreferences } from '../services/api'
import './Voice.css'

const voices = [
  {
    id: 'aria',
    name: 'Aria',
    language: 'EN',
    description: 'Warm · Unhurried · British',
  },
  {
    id: 'kai',
    name: 'Kai',
    language: 'EN',
    description: 'Crisp · Focused · American',
  },
  {
    id: 'meera',
    name: 'Meera',
    language: 'HI',
    description: 'Bright · Curious · Indian',
  },
]

const lengths = [5, 10, 15]

function Voice() {
  const navigate = useNavigate()

  const {
    profession,
    interests,
    voice: selectedVoice,
    setVoice: setSelectedVoice,
    briefLength,
    setBriefLength,
  } = useOnboarding()

  const handleStartBrief = async () => {
    try {
      await savePreferences({
        profession,
        interests,
        voice: selectedVoice,
        briefLength,
      })

      navigate('/news')
    } catch (error) {
      console.error('Failed to save preferences:', error)
    }
  }

  return (
    <section className="voice-page">
      <div className="voice-brand">
        <span className="brand-mark">▥</span>
        <span>Nuzio AI</span>
      </div>

      <div className="voice-progress">
        <span className="done"></span>
        <span className="done"></span>
        <span className="active"></span>
      </div>

      <div className="voice-content">
        <p className="step-label">STEP 3 OF 3</p>

        <h1>
          Pick a
          <span> narrator voice.</span>
        </h1>

        <p className="voice-subtitle">
          Choose how you want your morning brief to sound.
        </p>

        <div className="voice-list">
          {voices.map((voice) => {
            const selected = selectedVoice === voice.id

            return (
              <button
                type="button"
                key={voice.id}
                className={`voice-card ${selected ? 'selected' : ''}`}
                onClick={() => setSelectedVoice(voice.id)}
              >
                <div className="voice-avatar">
                  {voice.name.charAt(0)}
                </div>

                <div className="voice-info">
                  <div className="voice-name">
                    {voice.name}

                    <span>{voice.language}</span>
                  </div>

                  <p>{voice.description}</p>
                </div>

                <div className="voice-action">
                  {selected ? '✓' : '▶'}
                </div>
              </button>
            )
          })}
        </div>

        <div className="brief-section">
          <p className="brief-label">BRIEF LENGTH</p>

          <h2>
            How long is
            <span> your morning?</span>
          </h2>

          <p>Set your ideal brief length.</p>

          <div className="length-options">
            {lengths.map((length) => (
              <button
                key={length}
                type="button"
                className={briefLength === length ? 'selected' : ''}
                onClick={() => setBriefLength(length)}
              >
                {length} min
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        className="continue-btn"
        onClick={handleStartBrief}
      >
        Start my brief →
      </button>
    </section>
  )
}

export default Voice