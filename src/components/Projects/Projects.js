import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      ],
      datasciMenu: false,
      compsciMenu: false
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

  dsMenu() {
    return(
      <div className='container menu-content'>
        <a><h3 onClick={() => this.openPage(0)}>Example Project</h3></a>
        <p>
          {"This is just one of my machine learning projects that I am using to test out jupyter notebook rendering. I'm just going to leave it here until I add more content."}
        </p>
      </div>
    );
  }

  csMenu() {
    return(
      <div className='container menu-content'>
        <p>Nothing here yet</p>
      </div>
    );
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

            <div className='container row menu-buttons'>
              { !this.state.compsciMenu ?
                <ReactCSSTransitionGroup className='col-md datasci text-center' transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false} onClick={() => this.setState({datasciMenu: !this.state.datasciMenu})}>
                  <h2>DATA SCIENCE</h2>
                </ReactCSSTransitionGroup>
                : null
              }
              { this.state.datasciMenu ?
                <ReactCSSTransitionGroup className='col-md ds-menu text-center' transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                  <h2>Data Sci Menu</h2>
                  {this.dsMenu()}
                </ReactCSSTransitionGroup>
                : null
              }
              { this.state.compsciMenu ?
                <ReactCSSTransitionGroup className='col-md cs-menu text-center' transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                  <h2>Computer Science Menu</h2>
                  {this.csMenu()}
                </ReactCSSTransitionGroup>
                : null
              }
              { !this.state.datasciMenu ?
                <ReactCSSTransitionGroup className='col-md compsci text-center' transitionName="page-anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false} onClick={() => this.setState({compsciMenu: !this.state.compsciMenu})}>
                  <h2>COMPUTER SCIENCE</h2>
                </ReactCSSTransitionGroup>
                : null
              }
            </div>
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
