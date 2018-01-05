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

class Skills extends Component {
  render() {
    return(
      <div className='container page mt-2 mb-2'>
        <a className='close' onClick={this.props.onClick}
         style={{display: 'block'}}>
          <i className="material-icons">close</i>
        </a>
        <br />
        <div className='container'>
          <h2 style={styles.header}>
            EXPERIENCE & SKILLS
          </h2>
          <h2 style={styles.line}>
            ___________________________
          </h2>
        </div>
      </div>
    );
  }
}

export default Skills;
