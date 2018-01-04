import React, { Component } from 'react';

import '../../styles/Page.css';

import myPic from './assets/me.JPG';

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
      <div className='container page mt-5 mb-5'>
        <a className='close' onClick={this.props.onClick}
         style={{display: 'block'}}>
          X
        </a>
        <br />
        <div className='container'>
          <h2 style={styles.header}>
            INTRO
          </h2>
          <h2 style={styles.line}>
            _______________
          </h2>
          <img src={myPic} alt=''
           className='img-fluid rounded mt-5'
           style={styles.pic} />
        </div>
      </div>
    );
  }
}

export default Intro;
