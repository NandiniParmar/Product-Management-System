import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <div className="emoji-bounce">🚀</div>
      <h1 className="notfound-title">404 - Page Not Found</h1>
      <p className="notfound-text">
        UH OH! The page you are looking for doesn't exist.
      </p>
      <Link to="/" className="notfound-button">
        Go to Homepage
      </Link>
    </div>
  )
}

export default PageNotFound