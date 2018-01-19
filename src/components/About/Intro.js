import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../styles/Page.css';

import myPic from './assets/me.JPG';

const styles = {
  myPic: {
    maxHeight: '25vh',
    margin: '1rem 1rem 1rem 0'
  },
  content: {
    marginTop: '1.5rem'
  }
}

class Intro extends Component {
  render() {
    return(
      <ReactCSSTransitionGroup transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
        <div className='container page mt-2 mb-2'>
          <a className='close' onClick={this.props.history.goBack}>
            <i className="material-icons">close</i>
          </a>
          <br />
          <div className='container text-center-md'>
            <h2>
              INTRO
            </h2>
            <img src={myPic} className='float-left' style={styles.myPic} alt='' />

            <p style={styles.content}>
              Hello, my name is Jenn and I'm currently a junior at Southern Methodist
              University in Dallas studying computer science as well as
              getting a minor in statistics. I will also be getting a master's in
              computer science with a data science specialization. My main interest
              is in data science and machine learning, specifically, but I do also enjoy
              programming in general.
            </p>

            <p>
              This website is meant to be a place I can show off my projects to
              anyone that cares. Getting it up and anywhere near completed in terms
              of general layout has been a huge struggle for me though. I insisted
              on making it mostly from scratch even though I have no intention of
              becoming a web developer and ended up going through 4 different iterations
              of design. In the end, I chose to keep it pretty simple in hopes that
              nothing would distract from the content, especially since some of my
              projects are fairly long.
            </p>

            <p>
              In addition to showing what I've accomplished, I also hope that this
              website can be of use in helping anyone interested.
              The notebooks in the navbar are gitbooks that I use to post any
              notes that I have, whether from class or just self-study, for the
              cooresponding subjects. However, I don't have much free time, so it's
              likely that these notebooks will take a while for me to fill up. If
              you would like to contribute, please contact me, I would appreciate
              the help.
            </p>
            <div className='clearfix'>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Intro;
