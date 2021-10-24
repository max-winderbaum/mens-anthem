import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/brand/logo-music-inline.svg"
      height={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="logo"
      style={{
        marginBottom: `1.45rem`,
      }}
    />
  </Layout>
)

export default IndexPage
