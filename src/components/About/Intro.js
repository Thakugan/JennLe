import React, { Component } from 'react';

import '../../styles/Page.css';

// import myPic from './assets/me.JPG';

const styles = {
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
          <h2>
            INTRO
          </h2>
        </div>
      </div>
    );
  }
}

export default Intro;
