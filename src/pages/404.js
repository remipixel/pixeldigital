import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Ouups ! Ce chemin n&#39;existe pas ! Quelle tristesse.</p>
  </Layout>
)

export default NotFoundPage
