import AIRecommendations from '../components/AIRecommendations'
import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/letter-j.png'
import JobCard from '../components/JobCard'
import ThemeToggle from '../components/ThemeToggle'

const Dashboard = () => {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])

  const addJob = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const dataObj = Object.fromEntries(data)
    form.reset()
    try {
      const res = await axiosInstance.post('/jobs', dataObj)
      const newJobs = [...jobs, res.data.job]
      setJobs(newJobs)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axiosInstance.get('/jobs')
        setJobs(res.data.jobs)
      } catch (err) {
        console.log(err)
      }
    }

    getJobs()
  }, [])

  return (
    <div className="app-page pb-5">
      <nav className="navbar app-navbar fixed-top">
        <div className="container d-flex gap-2">
          <a href="#" className="navbar-brand">
            <img className="brand-mark" src={logo} alt="Logo" />
          </a>
          <div className="ms-auto d-flex align-items-center gap-2">
            <AIRecommendations jobs={jobs} />
            <ThemeToggle />
          </div>
          <Link to="/" className="btn btn-danger px-4" onClick={handleLogout}>
            Log out
          </Link>
        </div>
      </nav>
      <main className="dashboard-shell container">
        <div className="text-center mb-4">
          <p className="text-primary fw-bold mb-2">Your pipeline</p>
          <h1 className="h2 fw-bold mb-2">Track every opportunity</h1>
          <p className="text-secondary mb-0">
            Add roles as they appear and keep your next move visible.
          </p>
        </div>

        <form className="surface-panel dashboard-form mb-5" onSubmit={addJob}>
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md">
              <input
                className="form-control"
                type="text"
                name="company"
                placeholder="Company"
                required
              />
            </div>
            <div className="col-12 col-md">
              <input
                className="form-control"
                type="text"
                name="position"
                placeholder="Position"
                required
              />
            </div>
            <div className="col-12 col-md-auto">
              <button type="submit" className="btn btn-primary px-5 w-100">
              Add
            </button>
            </div>
          </div>
        </form>

        <div className="d-flex gap-4 flex-wrap justify-content-center">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard job={job} key={job._id} />)
          ) : (
            <div className="surface-panel text-center p-5">
              <h2 className="h5 mb-2">No jobs yet</h2>
              <p className="text-secondary mb-0">
                Add your first company and position to start tracking.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
export default Dashboard
