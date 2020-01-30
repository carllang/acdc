import React, { Component } from "react"
import Slider from "react-slick"
import Logo from "../images/ACDC_LOGO_RGB-01.png"
import styled from "styled-components"

const Container = styled.div`
  background-color: #000000;
  opacity: 0.8;
`

export default class Carousel extends Component {
  render() {
    return (
      <Container>
        <Slider slidesToShow={1}>
          <img src={Logo} alt="Header" />
          <img src={Logo} alt="Header" />
          <img src={Logo} alt="Header" />
        </Slider>
      </Container>
    )
  }
}
