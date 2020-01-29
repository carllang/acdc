import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 1.5em;
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}

export default Footer
