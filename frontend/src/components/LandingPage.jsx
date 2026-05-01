import { Link } from 'react-router-dom'
import board from '../assets/Whiteboard.png'

const LandingPage = () => {
  return (
    <main className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6 hero-image-wrap">
            <img
              className="hero-image w-100"
              src={board}
              alt="Job planning whiteboard"
            />
          </div>
          <div className="col-md-6">
            <p className="text-primary fw-bold mb-3">Simple application tracking</p>
            <h1 className="hero-title mt-0 mb-4">Job Manager</h1>
            <p className="hero-copy">
              Track companies, roles, and progress in one calm workspace. Add
              new opportunities quickly, keep statuses visible, and return to a
              clear dashboard whenever you need the next action.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              <Link to="/signup" className="btn btn-lg btn-primary px-5">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-lg btn-outline-secondary px-5">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage
