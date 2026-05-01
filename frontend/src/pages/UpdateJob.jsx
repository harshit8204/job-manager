import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../utils/axios'
import { useEffect, useState } from 'react'
import logo from '../assets/letter-j.png'
import ThemeToggle from '../components/ThemeToggle'

const UpdateTask = () => {
  const { id } = useParams()
  const [job, setJob] = useState([])
  const navigate = useNavigate()

  const editJob = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const dataObj = Object.fromEntries(data)

    try {
      await axiosInstance.patch(`/jobs/${id}`, dataObj)
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  const deleteJob = async () => {
    try {
      await axiosInstance.delete(`/jobs/${id}`)
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await axiosInstance.get(`/jobs/${id}`)
        setJob(res.data.job)
      } catch (err) {
        console.log(err)
      }
    }

    getJob()
  }, [])

  return (
    <div className="edit-page">
      <div className="container d-flex justify-content-end pt-3">
        <ThemeToggle />
      </div>
      <div className="text-center mt-3">
        <form className="surface-panel auth-card" onSubmit={editJob}>
          <Link to="/dashboard">
            <img className="logo-large mb-4" src={logo} alt="Logo" />
          </Link>
          <h1 className="h3 mb-4 fw-bold">Update job</h1>
          <input
            className="form-control"
            type="text"
            name="company"
            placeholder="Company"
            defaultValue={job.company}
            required
          />
          <input
            className="form-control mt-3"
            type="text"
            name="position"
            placeholder="Position"
            defaultValue={job.position}
            required
          />
          <select name="status" className="form-control mt-3">
            <option value="pending">pending</option>
            <option value="interview">interview</option>
            <option value="declined">declined</option>
          </select>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-100 btn-lg mb-2">
              Edit
            </button>
            <button
              type="button"
              onClick={deleteJob}
              className="btn btn-danger w-100 btn-lg"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default UpdateTask
