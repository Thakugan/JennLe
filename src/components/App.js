import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import About from './About/About';
import Projects from './Projects/Projects';

const bgImage = 'http://res.cloudinary.com/thakugan/image/upload/v1509387068/1_cdjgak.jpg';

const styles = {
  container: {
    background: 'rgba(0,0,0,1)',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    padding: '0',
    margin: '0',
    zIndex: '0'
  },
  bg: {
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
          <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <BrowserRouter>
              <div style={styles.bg}>
                <Route exact path="/" component={About} />
                <Route exact path="/projects" component={Projects} />
              </div>
            </BrowserRouter>
          </ReactCSSTransitionGroup>
        </div>
    );
  };
}

export default App;
