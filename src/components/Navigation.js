import React, { Component } from 'react'

const styles = {
  nav: {
    backgroundColor: 'rgba(255,255,255,.2)',
    margin: '0'
  },
  title: {
    fontFamily: '"Raleway", sans-serif',
    color: '#FFF',
    opacity: '.8'
  },
  text: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: "300",
    color: '#FFF',
    opacity: '.8'
  },
  dropdown: {
    backgroundColor: 'rgba(255,255,255,.2)',
    border: 'none',
    borderRadius: '0',
  }
}

class Navigation extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md navbar-light" style={styles.nav}>
        <div className="container">
          <a className="navbar-brand" style={styles.title}>Jenn Le</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" style={styles.text}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={styles.text}>Projects</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=".navbar" style={styles.text} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Notebooks
                </a>
                <div className="dropdown-menu" style={styles.dropdown} aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="https://compsci.jennle.com" style={styles.text}>Computer Science</a>
                  <a className="dropdown-item" href="https://datascience.jennle.com" style={styles.text}>Data Science</a>
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
