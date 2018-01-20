import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';

import '../../styles/Page.css';

class Skills extends Component {
  render() {
    return(
      <ReactCSSTransitionGroup transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
        <div className='container page mt-2 mb-2'>
          <Link to={'/'} className='close'>
            <i className="material-icons">close</i>
          </Link>
          <br />
          <div className='container'>
            <h2>
              EXPERIENCE & SKILLS
            </h2>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Skills;
