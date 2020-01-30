import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Slider from "../components/slider"

const Gallery = () => (
  <Layout>
    <SEO
      title="Gallery | ACDC Electricians"
      description="ACDC Electricians - We are open 24 hours a day, 7 days a week, 365 days a year electrical maintenance company specialising in bespoke installations and emergency response. Have a look at our gallery"
    />
    <h1>Gallery</h1>
    <div style={{ width: "100%" }}>
      <Slider />
    </div>
  </Layout>
)

export default Gallery
