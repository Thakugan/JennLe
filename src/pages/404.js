import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry, this page doesn't exist. Go back <Link to='/'>home</Link></p>
  </Layout>
)

export default NotFoundPage