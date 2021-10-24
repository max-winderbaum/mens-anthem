import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/mens-anthem.svg"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Men's Anthem Logo"
      style={{ width: `50%`, marginBottom: `1.45rem`, marginTop: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
