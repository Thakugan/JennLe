import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/About.css';

import Navigation from '../Navigation/Navigation';
import FrameButton from '../FrameButton';
import Intro from './Intro';
import Skills from './Skills';
import Hobbies from './Hobbies';

// social icons
import githubIcon from './assets/github.svg';
import linkedInIcon from './assets/linkedin.svg';
import emailIcon from './assets/email.svg';

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
    document.body.classList.toggle('blurredBG');

    this.setState({
      nav: false,
      main: false
    });

    switch (page) {
      case 0:
        this.setState({pages: [true, false, false]});
        break;
      case 1:
        this.setState({pages: [false, true, false]});
        break;
      case 2:
        this.setState({pages: [false, false, true]});
        break;
      default:
    }
  }

  closePage() {
    document.body.classList.remove('blurredBG');

    this.setState({
      nav: true,
      main: true,
      pages: [false, false, false]
    });
  }

  render() {
    return(
      <div>
        {this.state.nav ? <Navigation /> : null}
        {this.state.main ?
          <div className='container'>
            <div className='main text-center'>
              <h1 className='header display-3'>
                {this.state.title}
              </h1>
              <p className='lead'>
                {this.state.tagline.toUpperCase()}
              </p>
              <div className='container'>
                <FrameButton className='col-12-sm'
                onClick={() => this.openPage(0)}>
                  Intro
                </FrameButton>
                <FrameButton className='col-12-sm'
                onClick={() => this.openPage(1)}>
                  Experience & Skills
                </FrameButton>
                <FrameButton className='col-12-sm'
                onClick={() => this.openPage(2)}>
                  Hobbies
                </FrameButton>
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
          : null
        }

        {this.state.pages[0] ?
          <ReactCSSTransitionGroup transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <Intro onClick={() => this.closePage()} />
          </ReactCSSTransitionGroup>
         : null}
        {this.state.pages[1] ?
          <ReactCSSTransitionGroup transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <Skills onClick={() => this.closePage()} />
          </ReactCSSTransitionGroup>
         : null}
        {this.state.pages[2] ?
          <ReactCSSTransitionGroup transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <Hobbies onClick={() => this.closePage()} />
          </ReactCSSTransitionGroup>
         : null}
      </div>
    );
  };
}

export default About;
