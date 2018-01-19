import React, { Component } from 'react';

import '../styles/FrameButton.css';

class FrameButton extends Component {
  render() {
    return(
      <a className="frame-btn">
        <span className="frame-btn__outline frame-btn__outline--tall">
            <span className="frame-btn__line frame-btn__line--tall"></span>
            <span className="frame-btn__line frame-btn__line--flat"></span>
        </span>
        <span className="frame-btn__outline frame-btn__outline--flat">
            <span className="frame-btn__line frame-btn__line--tall"></span>
            <span className="frame-btn__line frame-btn__line--flat"></span>
        </span>
        <span className="frame-btn__solid"></span>
        <span className="frame-btn__text">{this.props.children}</span>
      </a>
    );
  }
}

export default FrameButton;
