import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="quatrecentquatre">
      <h1>404: Page non trouvée</h1>
      <img className="gif" src="https://media.giphy.com/media/dhsBE8zk1xd9wUE8yS/giphy.gif" alt="gif" />
      <Link></Link>
    </div>
  </Layout>
)

export default NotFoundPage
