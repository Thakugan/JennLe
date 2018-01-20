import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Individual Project Pages
import ProjectsMenu from './ProjectsMenu';
import MushroomHunting from './ProjectNotebooks/MushroomHuntingTableData';

import '../../styles/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/projects" component={ProjectsMenu} />
          <Route path="/projects/mushroom-hunting" component={MushroomHunting} />
        </Switch>
      </div>
    );
  }
}

export default Projects;
