import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/letter-j.png'
import axios from 'axios'
import { useState } from 'react'
import { API_BASE_URL } from '../utils/axios'
import ThemeToggle from '../components/ThemeToggle'

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const dataObj = Object.fromEntries(data)

    try {
      const res = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, dataObj)
      setError(false)
      localStorage.setItem('token', res.data.token)
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="auth-page">
      <div className="container d-flex justify-content-end pt-3">
        <ThemeToggle />
      </div>
      <div className="text-center mt-3">
        <form
          className="surface-panel auth-card"
          onSubmit={handleLogin}
        >
          <Link to="/">
            <img className="logo-large" src={logo} alt="Logo" />
          </Link>
          <h1 className="h3 mt-4 mb-2 fw-bold">Welcome back</h1>
          <p className="text-secondary mb-4">Log in to manage your job search.</p>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            required
            autoFocus="true"
          />
          <input
            type="password"
            name="password"
            className="form-control mt-3"
            placeholder="Password"
            required
          />
          <div className="mt-4">
            <button type="submit" className="btn btn-lg btn-primary w-100">
              Log in
            </button>
            <p className="mt-2">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
        {error && (
          <div className="alert alert-danger col-6 col-md-2  m-auto">
            Incorrect email or password
          </div>
        )}
      </div>
    </div>
  )
}
export default Login
