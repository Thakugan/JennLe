import React, { Component } from 'react';

import '../../styles/Page.css';

class Hobbies extends Component {
  render() {
    return(
      <div className='container page mt-2 mb-2'>
        <a className='close' onClick={this.props.onClick}
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
    );
  }
}

export default Hobbies;
