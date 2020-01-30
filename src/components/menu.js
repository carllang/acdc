import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0.3rem 1rem;
  transition: background-color 0.5s ease-out, color 0.5s ease-out;
  background-color: #ffffff;
  color: #000000;
  &:hover {
    color: #ffffff;
    background-color: #000000;
  }
`

const MenuContainer = styled.div`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  margin: 0;
  background-color: #ffffff;
  cursor: pointer;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`

const activeStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
}
const Menu = () => {
  return (
    <MenuContainer>
      <StyledLink to="/" activeStyle={activeStyle}>
        Home
      </StyledLink>

      <StyledLink to="/contact-us" activeStyle={activeStyle}>
        Contact us
      </StyledLink>

      <StyledLink to="/services" activeStyle={activeStyle}>
        Services
      </StyledLink>

      <StyledLink to="/rates" activeStyle={activeStyle}>
        Rates
      </StyledLink>

      <StyledLink to="/testimonials/" activeStyle={activeStyle}>
        Testimnonials
      </StyledLink>

      <StyledLink to="/gallery" activeStyle={activeStyle}>
        Gallery
      </StyledLink>
    </MenuContainer>
  )
}

export default Menu
