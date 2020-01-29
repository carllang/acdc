import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const MenuContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  margin: 0;
  background-color: #ffffff;

  cursor: pointer;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;

  li {
    color: #000000;
    margin: 0;
    padding: 0.3rem 1rem;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    :hover {
      color: #ffffff;
      background-color: #000000;
    }
  }
`
const Menu = () => {
  return (
    <MenuContainer>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact-us">Contact us</StyledLink>
      </li>
      <li>
        <StyledLink to="/services">Services</StyledLink>
      </li>
      <li>
        <StyledLink to="/rates">Rates</StyledLink>
      </li>
      <li>
        <StyledLink to="/testimonials/">Testimnonials</StyledLink>
      </li>
      <li>
        <StyledLink to="/gallery">Gallery</StyledLink>
      </li>
    </MenuContainer>
  )
}

export default Menu
