import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container d-flex justify-content-end pt-3">
        <ThemeToggle />
      </div>
      <div className="text-center container mt-5">
        <h1>Page not found</h1>
        <Link to="/">Go back to home</Link>
      </div>
    </div>
  )
}
export default NotFound
