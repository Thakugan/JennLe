import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import "../css/index.css"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="home">
      <SEO title="Home" />
      <div className='about'>
        <img className="my-pic" src="src/images/me.jpeg" />
        <div>
          <h1>Jenn Le</h1>
          <h2>Software Engineer at Microsoft</h2>
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
