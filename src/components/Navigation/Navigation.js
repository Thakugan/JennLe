import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navigation.css';

const styles = {
  nav: {
    backgroundColor: 'rgba(255,255,255,0)',
    margin: '0'
  },
  title: {
    fontFamily: '"Raleway", sans-serif',
    opacity: '.8'
  },
  text: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: "300",
    opacity: '.8'
  },
  dropdown: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    border: 'none',
    borderRadius: '0',
  }
}

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      navClosed: true
    }
  }

  render() {
    return(
      <nav className="navbar navbar-expand-md navbar-light text-center" style={styles.nav}>
        <div className="container">
          <a className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          onClick={() => this.setState({navClosed: !this.state.navClosed})}>
            {this.state.navClosed ? <i className="material-icons">add</i> :
             <i className="material-icons">remove</i>}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to={'/'}
                  style={styles.text}
                >
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to={'/projects'}
                  style={styles.text}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href=".navbar" style={styles.text} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Notebooks
                </a>
                <div className="dropdown-menu" style={styles.dropdown} aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="https://compsci.jennle.com">Computer Science</a>
                  <a className="dropdown-item" href="https://datascience.jennle.com">Data Science</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
}

export default Navigation;
