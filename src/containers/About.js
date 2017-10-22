import React, { Component } from 'react'

const styles = {
  activeCard: {
    color: '#FFF',
    fontFamily: '"Roboto", sans-serif',
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
      <div className='container'>
        <div className='align-middle mt-5' style={styles.activeCard}>
          <h1>Hi, I&apos;m Jenn</h1>
          <p>This website is very slowly being recreated</p>
        </div>
      </div>
    );
  };
}

export default About;
