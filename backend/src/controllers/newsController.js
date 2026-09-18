import { getPersonalizedNews } from '../services/newsService.js'

export const personalizedNews = (req, res) => {
  const { interests } = req.body

  const stories = getPersonalizedNews(interests)

  return res.status(200).json({
    success: true,
    message: 'Personalized news generated successfully',
    data: {
      stories,
    },
  })
}