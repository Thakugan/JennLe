import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import About from './About'

import bgImage from './images/1.jpg'

const styles = {
  container: {
    background: 'url(' + bgImage + ') no-repeat center center fixed',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    padding: '0',
    margin: '0',
    zIndex: '0'
  }
}

class App extends Component {
  render() {
    return(
      <div className='app' style={styles.container}>
        <Navigation />
        <About />
      </div>
    );
  };
}

export default App;
