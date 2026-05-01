import { Link } from 'react-router-dom'
import logo from '../assets/letter-j.png'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark app-navbar fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img className="brand-mark" src={logo} alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-end gap-md-2 align-items-md-center"
          id="navbarNav"
        >
          <div className="d-flex justify-content-center mb-3 mb-md-0">
            <ThemeToggle />
          </div>
          <Link
            to="/signup"
            className="btn btn-primary d-block mt-4 mb-3 mt-md-0 mb-md-0 px-4"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="btn btn-outline-light d-block mb-4 mb-md-0 px-4"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
