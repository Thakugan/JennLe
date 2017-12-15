import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import About from '../components/About'

const bgImage = 'http://res.cloudinary.com/thakugan/image/upload/v1509387068/1_cdjgak.jpg';

const styles = {
  container: {
    background: 'url(' + bgImage + ') no-repeat center center fixed',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
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
