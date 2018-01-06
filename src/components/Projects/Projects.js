import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import JupyterNotebook from './JupyterNotebook';

import '../../styles/Projects.css';

const styles = {
  activeCard: {
    color: '#000',
    fontFamily: '"Roboto", sans-serif'
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Projects',
      nav: true,
      main: true,
      pages: [

        // Machine Learning CSE5324 Projects
        false //Lab 1: Mushroom Hunting
      ]
    }
  }

  openPage(page) {
    this.setState({
      nav: false,
      main: false
    });

    let pages = this.state.pages;
    pages[page] = true;

    // update state
    this.setState({
        pages
    });
  }

  closePage(page) {
    this.setState({
      nav: true,
      main: true
    });

    let pages = this.state.pages;
    pages[page] = false;

    // update state
    this.setState({
        pages
    });
  }

  render() {
    return (
      <div>
        {this.state.nav ? <Navigation /> : null}
        {this.state.main ?
          <div className='projects'>
            <div className='text-center mt-md-3 mb-md-3' style={styles.activeCard}>
              <h1>{this.state.title}</h1>
            </div>
            <a><h3 onClick={() => this.openPage(0)}>Example Project</h3></a>
            <p>
              {"This is just one of my machine learning projects that I am using to test out jupyter notebook rendering. I'm just going to leave it here until I add more content."}
            </p>
          </div>
          : null
        }

        {this.state.pages[0] ?
          <JupyterNotebook onClick={() => this.closePage(0)} url='https://raw.githubusercontent.com/Thakugan/machine-learning-notebooks/master/1-exploring-table-data/mushroom-hunting.ipynb' />
          :null
        }
      </div>
    );
  }
}

export default Projects;
