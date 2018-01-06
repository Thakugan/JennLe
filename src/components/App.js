import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../styles/App.css';

import About from './About/About';
import Projects from './Projects/Projects';

class App extends Component {
  componentDidMount() {
    if (this.props.dark) {
      document.body.classList.toggle('darkBG');
    }
  }

  render() {
    return(
        <div className='app container'>
          <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <BrowserRouter>
              <div>
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
