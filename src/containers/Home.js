import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.title = "Hi, I'm Jenn";
    this.notice = "This website is very slowly being recreated";
  }

  render() {
    return (
      <div className="about container">
        <h1>{this.title}</h1>
        <p>{this.notice}</p>
      </div>
    );
  }
}

export default Home;
