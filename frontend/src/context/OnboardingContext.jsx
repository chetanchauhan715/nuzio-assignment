import { createContext, useContext, useState } from 'react'

const OnboardingContext = createContext()

export function OnboardingProvider({ children }) {
  const [profession, setProfession] = useState('Technology')

  const [interests, setInterests] = useState([
    'AI & Technology',
    'Indian Business',
    'Startups',
  ])

  const [voice, setVoice] = useState('aria')
  const [briefLength, setBriefLength] = useState(5)

  const value = {
    profession,
    setProfession,
    interests,
    setInterests,
    voice,
    setVoice,
    briefLength,
    setBriefLength,
  }

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  return useContext(OnboardingContext)
}