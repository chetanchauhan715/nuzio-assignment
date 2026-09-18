import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    
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

      {/* <button className="google-btn">
        <span className="google-icon">G</span>
        Continue with Google
      </button> */}

      <button
  className="google-btn"
  onClick={() => navigate('/profession')}
>
  <span className="google-icon">G</span>
  Continue with Google
</button>

      <p className="login-terms">
        By continuing you agree to our Terms & Privacy Policy
      </p>
    </section>
  )
}

export default Login