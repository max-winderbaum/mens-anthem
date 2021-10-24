import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "./link"

import LogoText from "../images/brand/logo-text-inline.svg"
import { fonts } from "../fonts"

const HeaderLink = (props) => (
  <span
    style={{
      marginLeft: `2rem`,
      marginTop: `0.8rem`,
      fontSize: `0.9rem`,
      fontFamily: fonts.nav,
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
            height: `2.5rem`
          }}
        />
      </Link>
      <HeaderLink to="/about/">About</HeaderLink>
      <HeaderLink to="/events/">Events</HeaderLink>
      <HeaderLink to="/principles/">Principles</HeaderLink>
      <HeaderLink to="/code/">Our code</HeaderLink>
      <HeaderLink to="/contact/">Contact</HeaderLink>
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
