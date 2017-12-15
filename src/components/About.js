import React, { Component } from 'react'

const styles = {
  activeCard: {
    color: '#FFF',
    fontFamily: '"Roboto", sans-serif'
  }
}

class About extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  render() {
    return(
      <div className='container align-items-center' style={styles.about}>
        <div className='align-items-center mt-5' style={styles.activeCard}>
          <h1>Hi, I&apos;m Jenn</h1>
        </div>
      </div>
    );
  };
}

export default About;
