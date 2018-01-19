import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../styles/Page.css';

class Hobbies extends Component {
  render() {
    return(
      <ReactCSSTransitionGroup transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
        <div className='container page mt-2 mb-2'>
          <a className='close' onClick={this.props.history.goBack}
           style={{display: 'block'}}>
            <i className="material-icons">close</i>
          </a>
          <br />
          <div className='container'>
            <h2>
              HOBBIES
            </h2>

          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Hobbies;
