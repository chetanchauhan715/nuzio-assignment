import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '../services/api'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await loginWithGoogle(
        credentialResponse.credential
      )

      localStorage.setItem(
        'nuzioUser',
        JSON.stringify(response.data.user)
      )

      navigate('/profession')
    } catch (error) {
      console.error('Google login failed:', error)
    }
  }

  return (
    <section className="login-page">
      <div className="login-brand">
        <span className="brand-mark">▥</span>
        <span>Nuzio AI</span>
      </div>

      <div className="login-content">
        <h1>Good morning.</h1>
        <h2>News on go.</h2>

        <p>
          Personalised audio news for Indian professionals —
          curated every morning.
        </p>
      </div>

      <div className="google-login-wrapper">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => {
            console.error('Google login failed')
          }}
          theme="filled_black"
          shape="pill"
          text="continue_with"
        />
      </div>

      <p className="login-terms">
        By continuing you agree to our Terms & Privacy Policy
      </p>
    </section>
  )
}

export default Login