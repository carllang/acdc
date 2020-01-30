import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/ACDC_LOGO_RGB-01.png"
import "./mobileMenu.css"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  // margin-left: 1em;
`
const Ul = styled.ul`
  list-style-type: none;
  li {
    font-size: 1.5em;
    text-transform: uppercase;
  }
`
const StyledNav = styled.nav`
  background-color: #000000;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MobileMenu = () => {
  return (
    <StyledNav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <Ul id="menu">
          <li>
            <div style={{ width: "200px" }}>
              <img src={Logo} alt="ACDC Electricians Logo" />
            </div>
          </li>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact-us">Contact us</StyledLink>
          </li>
          <li>
            <StyledLink to="/electrical-services">
              Electrical <br />
              services
            </StyledLink>
          </li>

          <li>
            <StyledLink to="/property-maintenance">
              Property maintenance
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/rates">Rates</StyledLink>
          </li>

          <li>
            <StyledLink to="/testimonials">Testimonials</StyledLink>
          </li>
          <li>
            <StyledLink to="/gallery">Gallery</StyledLink>
          </li>
        </Ul>
      </div>
    </StyledNav>
  )
}

export default MobileMenu
