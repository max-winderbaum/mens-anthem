import * as React from "react"
import Logo from "../images/mens-anthem.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Logo
      alt="Men's Anthem Logo"
      style={{
        width: `50%`,
        marginTop: `1.45rem`,
      }}
    />
  </Layout>
)

export default IndexPage
