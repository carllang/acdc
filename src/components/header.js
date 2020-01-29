import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/ACDC_LOGO_RGB-01.png"
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
      <div style={{ width: "30%" }}>
        <img src={Logo} alt="Header" />
      </div>
      <div style={{ width: "70%" }}>
        <img src={Skyline} alt="Skyline" />
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
