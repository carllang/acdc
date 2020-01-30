import React, { Component } from "react"
import Slider from "react-slick"
import image1 from "../images/gallery/cetteup-Geh-r9A4RBg-unsplash.jpg"
import image2 from "../images/gallery/henry-co-3coKbdfnAFg-unsplash.jpg"
import image3 from "../images/gallery/sergey-zolkin-m9qMoh-scfE-unsplash.jpg"
import image4 from "../images/gallery/sven-mieke-fteR0e2BzKo-unsplash.jpg"

export default class Carousel extends Component {
  render() {
    return (
      <Slider slidesToShow={1}>
        <img src={image1} alt="image1" />

        <img src={image2} alt="image2" />

        <img src={image3} alt="image3" />

        <img src={image4} alt="image4" />
      </Slider>
    )
  }
}
