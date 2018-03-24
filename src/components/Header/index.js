import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          JL
        </Link>
      </h1>
      <h1 style={{ color: '#8b0000' }}>|</h1>
      <h4>
        <Link
          to="/resume"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          RESUME
        </Link>
      </h4>
    </div>
  </div>
)

export default Header
