import newsData from '../data/newsData.js'

export const getPersonalizedNews = (interests) => {
  if (!Array.isArray(interests) || interests.length === 0) {
    return newsData
  }

  const personalizedNews = newsData.filter((story) =>
    interests.includes(story.category)
  )

  if (personalizedNews.length === 0) {
    return newsData
  }

  return personalizedNews
}