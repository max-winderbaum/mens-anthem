import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "./link"

import LogoText from "../images/brand/logo-text-inline.svg"

const HeaderLink = (props) => (
  <span
    style={{
      marginLeft: `2rem`,
      marginTop: `0.25rem`,
    }}
  >
    <Link {...props}>{props.children}</Link>
  </span>
)
const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.75rem 1rem`,
        display: `flex`,
        justifyContent: `flex-start`,
      }}
    >
      <Link to="/">
        <LogoText
          style={{
            height: `2rem`
          }}
        />
      </Link>
      <HeaderLink to="/page-2/">About</HeaderLink>
      <HeaderLink to="/using-typescript/">Our Principles</HeaderLink>
      <HeaderLink to="/using-ssr">Code of Conduct</HeaderLink>
      <HeaderLink to="/using-dsg">Upcoming Meetings</HeaderLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
