import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "../images/header.jpg"
import Skyline from "../images/skyline.jpg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffffff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 0`,
        display: `flex`,
      }}
    >
      <div style={{ width: "100%" }}>
        <img src={HeaderImage} alt="Header" style={{ marginBottom: "0" }} />
      </div>
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
