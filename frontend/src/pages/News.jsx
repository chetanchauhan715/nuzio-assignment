import { useEffect, useState } from 'react'
import { useOnboarding } from '../context/OnboardingContext'
import { getPersonalizedNews } from '../services/api'
import './News.css'

function News() {
  const {
    profession,
    interests,
    voice,
    briefLength,
  } = useOnboarding()

  const [stories, setStories] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const currentStory = stories[currentIndex]

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true)

        const response = await getPersonalizedNews(interests)

        setStories(response.data.stories)
        setCurrentIndex(0)
      } catch (error) {
        console.error(error)
        setError('Unable to load your personalized brief.')
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [interests])

  useEffect(() => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
  }, [currentIndex])

  const playStory = () => {
    if (!currentStory) return

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }

    const textToSpeak =
      `${currentStory.title}. ${currentStory.summary}`

    const speech =
      new SpeechSynthesisUtterance(textToSpeak)

    if (voice === 'aria') {
      speech.lang = 'en-GB'
    }

    if (voice === 'kai') {
      speech.lang = 'en-US'
    }

    if (voice === 'meera') {
      speech.lang = 'hi-IN'
    }

    speech.rate = 0.95

    speech.onend = () => {
      setIsPlaying(false)
    }

    speech.onerror = () => {
      setIsPlaying(false)
    }

    window.speechSynthesis.speak(speech)
    setIsPlaying(true)
  }

  const nextStory = () => {
    if (stories.length === 0) return

    setCurrentIndex((prev) => {
      if (prev === stories.length - 1) {
        return 0
      }

      return prev + 1
    })
  }

  const previousStory = () => {
    if (stories.length === 0) return

    setCurrentIndex((prev) => {
      if (prev === 0) {
        return stories.length - 1
      }

      return prev - 1
    })
  }

  if (loading) {
    return (
      <section className="news-page">
        <p>Preparing your personalized brief...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="news-page">
        <p>{error}</p>
      </section>
    )
  }

  if (!currentStory) {
    return (
      <section className="news-page">
        <p>No stories available.</p>
      </section>
    )
  }

  return (
    <section className="news-page">
      <div className="news-header">
        <div>
          <p className="news-brand">
            ▥ Nuzio AI
          </p>

          <h1>Good morning.</h1>

          <p className="news-intro">
            Your {briefLength} minute brief is ready.
          </p>
        </div>

        <div className="profile-circle">
          U
        </div>
      </div>

      <div className="news-meta">
        <span>{profession}</span>
        <span>•</span>
        <span>{voice}</span>
      </div>

      <div className="news-categories">
        {interests.map((interest) => (
          <span key={interest}>
            {interest}
          </span>
        ))}
      </div>

      <div className="story-count">
        STORY {currentIndex + 1} OF {stories.length}
      </div>

      <div className="story-card">
        <span className="story-category">
          {currentStory.category}
        </span>

        <h2>
          {currentStory.title}
        </h2>

        <p className="story-summary">
          {currentStory.summary}
        </p>

        <p className="story-source">
          Source: {currentStory.source}
        </p>

        <div className="waveform">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="player-controls">
          <button
            type="button"
            onClick={previousStory}
          >
            ⏮
          </button>

          <button
            type="button"
            className="play-button"
            onClick={playStory}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          <button
            type="button"
            onClick={nextStory}
          >
            ⏭
          </button>
        </div>
      </div>

      <div className="up-next">
        <p>UP NEXT</p>

        {stories.map((story, index) => (
          <button
            key={story.id}
            type="button"
            className={`next-story ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <div>
              <span>{story.category}</span>
              <h3>{story.title}</h3>
            </div>

            <span>›</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default News