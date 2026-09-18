import { OAuth2Client } from 'google-auth-library'

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body

    if (!credential) {
      return res.status(400).json({
        success: false,
        message: 'Google credential is required',
      })
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()

    const user = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    }

    return res.status(200).json({
      success: true,
      message: 'Google login successful',
      data: {
        user,
      },
    })
  } catch (error) {
    console.error('Google login error:', error)

    return res.status(401).json({
      success: false,
      message: 'Google authentication failed',
    })
  }
}