import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.openMenu = this.openMenu.bind(this)
    this.state = {
      menuOpen: false,
    }
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      this.state.menuOpen
    ) {
      this.openMenu()
    }
  }

  openMenu() {
    const currentState = this.state.menuOpen
    this.setState({ menuOpen: !currentState })
  }

  render() {
    return (
      <div
        className={this.state.menuOpen ? 'header open-menu' : 'header'}
        ref={this.setWrapperRef}
      >
        <div className="brand">
          <h1 className="menu-button" onClick={this.openMenu}>
            +
          </h1>
          <h1 className="name">
            <Link
              to="/"
              onClick={this.state.menuOpen ? this.openMenu : () => {}}
            >
              JL
            </Link>
          </h1>
          <h1 className="brand-bar">|</h1>
        </div>
        <div className="menu" ref="menu">
          <h4>
            <Link to="/about" onClick={this.openMenu}>
              About
            </Link>
          </h4>
          <h4>
            <Link to="/projects" onClick={this.openMenu}>
              Projects
            </Link>
          </h4>
          <h4>
            <Link to="/research" onClick={this.openMenu}>
              Research
            </Link>
          </h4>
          <h4>
            <Link to="/art" onClick={this.openMenu}>
              Art & Design
            </Link>
          </h4>
        </div>
      </div>
    )
  }
}
