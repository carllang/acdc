import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO
      title="404 Page not found | ACDC Electricians"
      description="ACDC Electricians - We are open 24 hours a day, 7 days a week, 365 days a year electrical maintenance company specialising in bespoke installations and emergency response."
    />
    <h1>Page not found!</h1>
    <p>The page you are looking for does not exist!</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default ContactPage
