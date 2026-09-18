const API_URL = import.meta.env.VITE_API_URL

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!response.ok) {
    throw new Error('Login failed')
  }

  return response.json()
}

export const savePreferences = async (preferences) => {
  const response = await fetch(`${API_URL}/preferences`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preferences),
  })

  if (!response.ok) {
    throw new Error('Failed to save preferences')
  }

  return response.json()
}

export const getPersonalizedNews = async (interests) => {
  const response = await fetch(`${API_URL}/news/personalized`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      interests,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to load personalized news')
  }

  return response.json()
}