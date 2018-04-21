import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import landingMobile from '../assets/landing-mobile.jpg'
import landingDesktop from '../assets/landing-desktop.jpg'

import { Heart, Club, Diamond } from '../assets/icons'

const IndexPage = () => (
  <div style={{ minHeight: '100%' }} className="container">
    <div className="page landing">
      <h1>Jenn Le</h1>
      <h2>Aspiring Software Engineer</h2>
      <p>
        Hi, I’m a computer science student at Southern Methodist University. I
        like to program and draw.
      </p>
      <div className="my-pic">
        <hr />
        <img className="mobile" src={landingMobile} />
        <img className="desktop" src={landingDesktop} />
        <hr />
      </div>
      <div className="link-content">
        <p>
          To learn more about me and what I can do, take a look at my{' '}
          <Link to="/about">resume</Link> or some of the things I’ve done:
        </p>
        <div className="page-links">
          <div>
            <Link to="/projects">
              <Heart />
              <p>Programming Projects</p>
            </Link>
          </div>
          <div>
            <Link to="/research">
              <Club />
              <p>Research</p>
            </Link>
          </div>
          <div>
            <Link to="/art">
              <Diamond />
              <p>Art & Design</p>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="filler" />

    <footer className="contact">
      <h4>Contact Me</h4>
    </footer>
  </div>
)

export default IndexPage
