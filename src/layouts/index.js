import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../scss/jennle.scss'

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet title="Jenn Le" />
    <Header />
    <div className="page-wrapper">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
