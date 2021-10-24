import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { H1, P } from "../components/tags"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <section
      style={{
        marginTop: `2rem`,
        textAlign: `left`,
      }}
    >
      <H1>About Us</H1>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </P>
    </section>
  </Layout>
)

export default AboutPage