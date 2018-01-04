import React, { Component } from 'react';

import '../../styles/Page.css';

const styles = {
  header: {
    margin: '1rem 0rem 0rem 1rem'
  },
  line: {
    margin: '0rem 0rem 0rem 1rem',
    lineHeight: '.8rem'
  }
}

class Hobbies extends Component {
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
            HOBBIES
          </h2>
          <h2 style={styles.line}>
            _______________
          </h2>
        </div>
      </div>
    );
  }
}

export default Hobbies;
