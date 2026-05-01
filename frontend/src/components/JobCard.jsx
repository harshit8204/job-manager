import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {
  const navigate = useNavigate()
  return (
    <div
      className="job-card p-4 rounded-4"
    >
      <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
        <div>
          <p className="text-secondary small mb-1">Company</p>
          <h3 className="h5 mb-0">{job.company}</h3>
        </div>
        <span className="job-status">{job.status}</span>
      </div>
      <p className="text-secondary small mb-1">Position</p>
      <p className="mb-4">{job.position}</p>
      <button
        onClick={() => navigate(`/jobs/${job._id}/edit`)}
        className="btn btn-md w-100 btn-primary"
      >
        Edit
      </button>
    </div>
  )
}
export default JobCard
