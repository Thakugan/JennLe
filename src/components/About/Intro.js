import React, { Component } from 'react';

import '../../styles/Page.css';

// import myPic from './assets/me.JPG';

const styles = {
  header: {
    margin: '1rem 0rem 0rem 1rem'
  },
  line: {
    margin: '0rem 0rem 0rem 1rem',
    lineHeight: '.8rem'
  },
  pic: {
    marginLeft: '1rem',
    maxHeight: '12rem',
    width: 'auto'
  }
}

class Intro extends Component {
  render() {
    return(
      <div className='container page mt-2 mb-2'>
        <a className='close' onClick={this.props.onClick}>
          <i className="material-icons">close</i>
        </a>
        <br />
        <div className='container'>
          <h2 style={styles.header}>
            INTRO
          </h2>
        </div>
      </div>
    );
  }
}

export default Intro;
