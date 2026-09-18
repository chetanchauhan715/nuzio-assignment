import { useEffect, useState } from 'react'
import { useOnboarding } from '../context/OnboardingContext'
import './News.css'

const newsStories = [
  {
    id: 1,
    category: 'AI & Technology',
    title: 'AI adoption grows across Indian businesses',
    summary:
      'Indian companies are increasing their use of artificial intelligence for customer support, automation, analytics, and internal productivity tools.',
    source: 'Nuzio Brief',
  },
  {
    id: 2,
    category: 'Startups',
    title: 'Indian startups focus more on sustainable growth',
    summary:
      'Startup founders are increasingly prioritising profitability, efficient operations, and long-term business models instead of growth at any cost.',
    source: 'Nuzio Brief',
  },
  {
    id: 3,
    category: 'Indian Business',
    title: 'Digital services continue to expand across India',
    summary:
      'Businesses across India are investing in digital platforms, online payments, automation, and cloud services to improve their operations.',
    source: 'Nuzio Brief',
  },
  {
    id: 4,
    category: 'Financial Markets',
    title: 'Markets remain focused on inflation and interest rates',
    summary:
      'Investors are closely watching inflation data, interest-rate decisions, and global economic signals while evaluating market opportunities.',
    source: 'Nuzio Brief',
  },
  {
    id: 5,
    category: 'Health & Medicine',
    title: 'Digital healthcare services continue to grow',
    summary:
      'Healthcare providers are increasingly using telemedicine, digital records, and technology-assisted services to improve patient access.',
    source: 'Nuzio Brief',
  },
  {
    id: 6,
    category: 'Global Politics',
    title: 'Global leaders focus on trade and technology policy',
    summary:
      'Governments are discussing trade, technology regulation, supply chains, and economic cooperation as global competition continues.',
    source: 'Nuzio Brief',
  },
]

function News() {
  const {
    profession,
    interests,
    voice,
    briefLength,
  } = useOnboarding()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const personalizedStories = newsStories.filter((story) =>
    interests.includes(story.category)
  )

  const stories =
    personalizedStories.length > 0
      ? personalizedStories
      : newsStories

  const currentStory = stories[currentIndex]

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

    const textToSpeak = `${currentStory.title}. ${currentStory.summary}`

    const speech = new SpeechSynthesisUtterance(textToSpeak)

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

    window.speechSynthesis.speak(speech)
    setIsPlaying(true)
  }

  const nextStory = () => {
    setCurrentIndex((prev) => {
      if (prev === stories.length - 1) {
        return 0
      }

      return prev + 1
    })
  }

  const previousStory = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return stories.length - 1
      }

      return prev - 1
    })
  }

  if (!currentStory) {
    return null
  }

  return (
    <section className="news-page">
      <div className="news-header">
        <div>
          <p className="news-brand">▥ Nuzio AI</p>

          <h1>
            Good morning.
          </h1>

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