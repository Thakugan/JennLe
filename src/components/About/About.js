import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/About.css';

import Navigation from '../Navigation/Navigation';
import FrameButton from '../FrameButton';

// social icons
import githubIcon from './assets/github.svg';
import linkedInIcon from './assets/linkedin.svg';
import emailIcon from './assets/email.svg';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jenn Le',
      tagline: 'Aspiring data scientist and software engineer'
    }
  }

  render() {
    return(
      <div className='about'>
        <Navigation />
        <div>
          <div className='main text-center'>
            <h1 className='header display-3'>
              {this.state.title}
            </h1>
            <p className='lead'>
              {this.state.tagline.toUpperCase()}
            </p>
            <div className='mt-md-5 menu'>
              <Link to={'/intro'}>
                <FrameButton className='col-12'>
                  Intro
                </FrameButton>
              </Link>

              <Link to={'/skills'}>
                <FrameButton className='col-12'>
                  Experience & Skills
                </FrameButton>
              </Link>

              <Link to={'/hobbies'}>
                <FrameButton className='col-12'>
                  Hobbies
                </FrameButton>
              </Link>
            </div>
          </div>

          <div className='contact text-center'>
            <div className='text-center'>
              <p>contact me</p>
            </div>
            <div className='mx-auto mt-1'>
              <a href='https://github.com/Thakugan' className='col'>
                <img src={githubIcon} className='social-icon'
                 alt=''/>
              </a>
              <a href='https://www.linkedin.com/in/thakugan/' className='col'>
                <img src={linkedInIcon} className='social-icon'
                 alt=''/>
              </a>
              <a href='mailto:jenn.thakugan@icloud.com' className='col'>
                <img src={emailIcon} className='social-icon'
                 alt=''/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default About;
