import React from "react"

import Layout from "../components/layout"
import Form from "../components/Form/form"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Home | ACDC Electricians"
      description="ACDC Electricians - We are open 24 hours a day, 7 days a week, 365 days a year electrical maintenance company specialising in bespoke installations and emergency response."
    />
    <h1>Contact us</h1>
    <p>Please contact us using the form provided or call us</p>
    <Form />
  </Layout>
)

export default ContactPage
