import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/letter-j.png'
import axios from 'axios'
import { useState } from 'react'
import { API_BASE_URL } from '../utils/axios'
import ThemeToggle from '../components/ThemeToggle'

const Signup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const dataObj = Object.fromEntries(data)

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/auth/register`,
        dataObj
      )
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
          onSubmit={handleSignup}
        >
          <Link to="/">
            <img className="logo-large" src={logo} alt="Logo" />
          </Link>
          <h1 className="h3 mt-4 mb-2 fw-bold">Create your workspace</h1>
          <p className="text-secondary mb-4">
            Start tracking applications in a cleaner dashboard.
          </p>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            maxLength={50}
            required
            autoFocus="true"
          />
          <input
            type="email"
            name="email"
            className="form-control mt-3"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            className="form-control mt-3"
            placeholder="Password"
            minLength={6}
            required
          />
          <div className="mt-4">
            <button type="submit" className="btn btn-lg btn-primary w-100">
              Sign up
            </button>
            <p className="mt-2">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
        {error && (
          <div className="alert alert-danger col-6 col-md-2 m-auto">
            Email already exists
          </div>
        )}
      </div>
    </div>
  )
}
export default Signup
