import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';

const styles = {
  activeCard: {
    color: '#FFF',
    fontFamily: '"Roboto", sans-serif',
    paddingTop: '3rem'
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
          <div className='text-center' style={styles.activeCard}>
            <h1>Projects</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
