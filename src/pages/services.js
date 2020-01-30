import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import image1 from "../images/gallery/cetteup-Geh-r9A4RBg-unsplash.jpg"
import image2 from "../images/gallery/henry-co-3coKbdfnAFg-unsplash.jpg"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Services | ACDC Electricians"
      description="ACDC Electricians - We are open 24 hours a day, 7 days a week, 365 days a year electrical maintenance company specialising in bespoke installations and emergency response. We offer electrical as well as property management services."
    />
    <h1>Services</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "48%" }}>
        <h2>Electrical services</h2>
        <img src={image1} alt="image1" />
      </div>

      <div style={{ width: "48%" }}>
        <h2>Property maintenance</h2>
        <img src={image2} alt="image2" />
      </div>
    </div>
  </Layout>
)

export default ContactPage
