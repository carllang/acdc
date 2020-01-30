import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import CityGuilds from "../images/city_and_guilds_qualified.jpeg"
import PartP from "../images/part_p_electrical_safety.jpeg"
import Stroma from "../images/stroma_certified_installer.jpeg"

const StyledFooter = styled.footer`
  background-color: #000000;
  color: #cccccc;
  font-size: 0.7em;
  padding: 1.5em 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 20px 0 0;
    height: 50px;
  }
  span {
    margin-right: 20px;
  }
`

const StyledLink = styled(Link)`
  color: #cccccc;
  font-size: 1em;
  text-decoration: none;
  margin-right: 20px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        © {new Date().getFullYear()}
        {` `}
        ACDC Electricians
      </span>
      <span>Call us now on 0000000000</span>
      <span>
        <StyledLink to="/terms">Terms & conditions</StyledLink>
        <StyledLink to="/privacy-policy">Privacy policy</StyledLink>
      </span>
      <ImageWrapper>
        <span>Industry Accreditations</span>
        <img src={CityGuilds} alt="City and Guilds qualified" />
        <img src={PartP} alt="Part P Electrical safety" />
        <img src={Stroma} alt="Stroma certified installer" />
      </ImageWrapper>
    </StyledFooter>
  )
}

export default Footer
