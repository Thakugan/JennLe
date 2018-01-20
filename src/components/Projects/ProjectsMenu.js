import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Projects'
    }
  }

  render() {
    return(
      <div>
        <Navigation />
        <div className='projects'>
          <div className='text-center mt-md-3 mb-md-3'>
            <h1>{this.state.title}</h1>
          </div>

          <h2>Menu</h2>
          <Link className="nav-link" to={'/projects/mushroom-hunting'}>
            Mushroom Hunting
          </Link>
          This page is currently being worked on, I will leave this project
          here just as an example.
        </div>
      </div>
    );
  };
}

export default ProjectsMenu;
