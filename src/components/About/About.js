import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import FrameButton from '../FrameButton';

// social icons
import githubIcon from './assets/github.svg';
import linkedInIcon from './assets/linkedin.svg';
import emailIcon from './assets/email.svg';

const styles = {
  main: {
    color: '#FFF',
    fontFamily: "'Roboto', sans-serif",
    paddingTop: '15%',
    opacity: '.7'
  },
  header: {
    fontFamily: "'Raleway', sans-serif"
  },
  socialIcon: {
    color: 'white',
    maxHeight: '2rem'
  },
  wrapper: {
    backgroundColor: 'rgba(27, 27, 34, 0.85)',
    height: '65vh',
    width: '100%'
  },
  me: {
    height: '10rem'
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jenn Le',
      tagline: 'Aspiring data scientist and software engineer',
      nav: true,
      main: true,
      pages: [false, false, false]
    }
  }

  openPage(page) {
    this.setState({nav: !this.state.nav});
  }

  render() {
    return(
      <div>
        {this.state.nav ? <Navigation /> : null}
        {this.state.main ?
          <div className='container'>
            <div className='text-center' style={styles.main}>
              <h1 style={styles.header}
              className='display-3'>
                {this.state.title}
              </h1>
              <p className='lead'>
                {this.state.tagline.toUpperCase()}
              </p>
              <FrameButton
              onClick={() => this.openPage(0)}>
                Intro
              </FrameButton>
              <FrameButton
              onClick={() => this.openPage(0)}>
                Experience & Skills
              </FrameButton>
              <FrameButton
              onClick={() => this.openPage(0)}>
                Hobbies
              </FrameButton>
            </div>

            <div className='text-center' style={styles.main}>
              <div className='text-center'>
                <p>contact me</p>
              </div>
              <div className='mx-auto mt-1'>
                <a href='https://github.com/Thakugan' className='col'>
                  <img src={githubIcon}
                   alt='' style={styles.socialIcon}/>
                </a>
                <a href='https://www.linkedin.com/in/thakugan/' className='col'>
                  <img src={linkedInIcon}
                   alt='' style={styles.socialIcon}/>
                </a>
                <a href='mailto:jenn.thakugan@icloud.com' className='col'>
                  <img src={emailIcon}
                   alt='' style={styles.socialIcon}/>
                </a>
              </div>
            </div>
          </div>
          : null
        }

        {this.state.pages[0] ? <h1>Intro</h1> : null}
      </div>
    );
  };
}

export default About;
