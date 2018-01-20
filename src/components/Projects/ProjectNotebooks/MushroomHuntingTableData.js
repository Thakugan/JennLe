import React, { Component } from 'react';
import JupyterNotebook from '../JupyterNotebook';

class MushroomHunting extends Component {
  render() {
    return (
      <JupyterNotebook url='https://raw.githubusercontent.com/Thakugan/machine-learning-notebooks/master/1-exploring-table-data/mushroom-hunting.ipynb' />
    );
  }
}

export default MushroomHunting;
